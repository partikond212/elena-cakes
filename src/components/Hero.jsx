import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { business } from '../data'
import Cake from './Cake'

export default function Hero() {
  const ref = useRef(null)
  // прогресс скролла внутри hero: 0 — вверху, 1 — hero ушёл с экрана
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="container hero-grid">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="stars">★★★★★</span>
            {business.rating.toFixed(1)} · {business.ratingsCount} оценок на Яндекс Картах
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Торты, которые <em>хочется</em> попробовать первым
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Домашние торты и десерты на заказ в {business.city}. Натуральные сливки,
            свежие ягоды и оформление под ваш праздник.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="#order" className="btn btn-primary">Заказать торт</a>
            <a href="#catalog" className="btn btn-ghost">Смотреть каталог</a>
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            className="cake-stage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Cake progress={scrollYProgress} />
          </motion.div>
          <p className="scroll-hint">↓ прокрутите, чтобы отрезать кусочек</p>
        </div>
      </div>
    </section>
  )
}
