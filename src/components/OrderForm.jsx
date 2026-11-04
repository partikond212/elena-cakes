import { useState } from 'react'
import { fillings } from '../data'
import Reveal from './Reveal'

export default function OrderForm() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', weight: '2', filling: '', wishes: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // НЕДОРАБОТКА №4: нет валидации, можно выбрать прошедшую дату,
  // и заявка никуда не уходит — только в консоль.
  const submit = (e) => {
    e.preventDefault()
    console.log('Заявка:', form)
    alert('Спасибо! Мы скоро свяжемся с вами.')
  }

  return (
    <section className="section" id="order">
      <div className="container">
        <Reveal>
          <div className="order-wrap">
            <div>
              <h2 className="section-title">Заказать торт</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>
                Оставьте заявку, и мы напишем вам в WhatsApp, чтобы обсудить детали.
              </p>
              <ol className="steps">
                <li><span className="step-num">1</span><div>Выбираете торт и начинку</div></li>
                <li><span className="step-num">2</span><div>Согласуем дизайн и вес</div></li>
                <li><span className="step-num">3</span><div>Вносите предоплату</div></li>
                <li><span className="step-num">4</span><div>Забираете свежий торт в назначенный день</div></li>
              </ol>
            </div>

            <form className="form" onSubmit={submit}>
              <div className="form-row">
                <label>Имя<input name="name" value={form.name} onChange={update} /></label>
                <label>Телефон<input name="phone" value={form.phone} onChange={update} /></label>
              </div>
              <div className="form-row">
                <label>Дата праздника<input type="date" name="date" value={form.date} onChange={update} /></label>
                <label>Вес, кг<input type="number" name="weight" value={form.weight} onChange={update} /></label>
              </div>
              <label>
                Начинка
                <select name="filling" value={form.filling} onChange={update}>
                  <option value="">Посоветуйте мне</option>
                  {fillings.map((f) => <option key={f.name}>{f.name}</option>)}
                </select>
              </label>
              <label>
                Пожелания по оформлению
                <textarea name="wishes" value={form.wishes} onChange={update} placeholder="Например: надпись «С днём рождения, Маша!», розовые цветы" />
              </label>
              <button className="btn btn-primary" type="submit" style={{ justifyContent: 'center' }}>
                Отправить заявку
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
