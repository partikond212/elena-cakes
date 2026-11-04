import { fillings } from '../data'
import Reveal from './Reveal'

export default function Fillings() {
  return (
    <section className="section fillings" id="fillings">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Начинки</h2>
          <p className="section-sub">Не знаете, что выбрать? Напишите, Елена подскажет под ваш вкус.</p>
        </Reveal>
        <div className="fill-grid">
          {fillings.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.05}>
              <div className="fill">
                <h3>{f.name}</h3>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
