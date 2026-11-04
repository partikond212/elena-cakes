import { motion, useTransform } from 'framer-motion'

/*
  Торт нарисован один раз (<CakeShape/>), а потом показан дважды через clipPath:
  - основная часть: всё левее линии разреза (CUT_X)
  - кусочек: всё правее, он отъезжает при скролле
  Между ними лежит "срез" со слоями, его видно, когда кусок отъехал.
*/
const CUT_X = 300
const TOP = 150
const BOTTOM = 320

function CakeShape() {
  return (
    <g>
      {/* тело торта */}
      <rect x="60" y={TOP} width="320" height={BOTTOM - TOP} rx="6" fill="url(#frosting)" />
      {/* волна крема по низу */}
      <path
        d="M60 300 q20 14 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 V320 H60 Z"
        fill="#fff6ee"
        opacity=".9"
      />
      {/* верх торта */}
      <ellipse cx="220" cy={TOP} rx="160" ry="32" fill="#fde4e1" />
      <ellipse cx="220" cy={TOP} rx="160" ry="32" fill="url(#topShine)" />
      {/* капли крема сверху */}
      <path
        d="M70 160 q10 30 20 0 q12 40 24 0 q10 22 20 0 q14 34 28 0 q10 20 20 0 q12 36 24 0 q10 26 20 0 q14 30 28 0 q10 22 20 0 q12 38 24 0 q10 24 20 0 q14 30 28 0"
        fill="none"
        stroke="#fff6ee"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* клубника */}
      {[110, 160, 220, 280, 340].map((x, i) => (
        <g key={x} transform={`translate(${x} ${TOP - 14 + (i % 2) * 8})`}>
          <path d="M0 -14 C14 -14 16 4 0 16 C-16 4 -14 -14 0 -14Z" fill="#d6334a" />
          <path d="M-7 -14 L0 -8 L7 -14 L0 -18Z" fill="#3e8e4f" />
          <circle cx="-4" cy="-4" r="1.2" fill="#ffd27a" />
          <circle cx="4" cy="2" r="1.2" fill="#ffd27a" />
          <circle cx="-2" cy="8" r="1.2" fill="#ffd27a" />
        </g>
      ))}
    </g>
  )
}

function Layers({ x, width }) {
  // разрез: бисквит / крем / ягодный слой
  const rows = [
    { h: 12, c: '#fbd9d6' },
    { h: 34, c: '#f1d29b' },
    { h: 10, c: '#fff6ee' },
    { h: 8, c: '#c63c4d' },
    { h: 34, c: '#f1d29b' },
    { h: 10, c: '#fff6ee' },
    { h: 8, c: '#c63c4d' },
    { h: 34, c: '#f1d29b' },
    { h: 20, c: '#fbd9d6' },
  ]
  let y = TOP
  return (
    <g>
      {rows.map((r, i) => {
        const el = <rect key={i} x={x} y={y} width={width} height={r.h} fill={r.c} />
        y += r.h
        return el
      })}
    </g>
  )
}

export default function Cake({ progress }) {
  // кусочек отъезжает вправо-вверх и наклоняется
  const x = useTransform(progress, [0, 0.5], [0, 95])
  const y = useTransform(progress, [0, 0.5], [0, -36])
  const rotate = useTransform(progress, [0, 0.5], [0, 14])
  // крем на боковой стороне кусочка исчезает, становятся видны слои
  const coverOpacity = useTransform(progress, [0.05, 0.3], [1, 0])
  const shadowOpacity = useTransform(progress, [0, 0.5], [0, 0.25])

  return (
    <svg className="cake-svg" viewBox="0 0 440 400" role="img" aria-label="Торт с клубникой">
      <defs>
        <linearGradient id="frosting" x1="0" x2="1">
          <stop offset="0" stopColor="#f6c4c1" />
          <stop offset=".5" stopColor="#fbd9d6" />
          <stop offset="1" stopColor="#efb2ae" />
        </linearGradient>
        <radialGradient id="topShine" cx=".4" cy=".3" r=".7">
          <stop offset="0" stopColor="#fff" stopOpacity=".7" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="mainPart">
          <rect x="0" y="0" width={CUT_X} height="400" />
        </clipPath>
        <clipPath id="slicePart">
          <rect x={CUT_X} y="0" width="140" height="400" />
        </clipPath>
      </defs>

      {/* тарелка */}
      <ellipse cx="220" cy="330" rx="200" ry="34" fill="#fff" />
      <ellipse cx="220" cy="326" rx="180" ry="26" fill="#f4ece6" />

      {/* срез основной части (под куском) */}
      <Layers x={CUT_X - 2} width={14} />

      {/* основная часть */}
      <g clipPath="url(#mainPart)">
        <CakeShape />
      </g>

      {/* тень от кусочка на тарелке */}
      <motion.ellipse cx="380" cy="334" rx="50" ry="10" fill="#4a2c24" style={{ opacity: shadowOpacity }} />

      {/* кусочек */}
      <motion.g style={{ x, y, rotate, transformOrigin: `${CUT_X}px ${BOTTOM}px` }}>
        <Layers x={CUT_X} width={80} />
        <motion.g style={{ opacity: coverOpacity }} clipPath="url(#slicePart)">
          <CakeShape />
        </motion.g>
      </motion.g>
      {/* НЕДОРАБОТКА №6: крошек нет, и анимация не уважает prefers-reduced-motion */}
    </svg>
  )
}
