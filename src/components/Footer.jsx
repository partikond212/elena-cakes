import { business } from '../data'

// НЕДОРАБОТКА №7: нет карты, ссылки соцсетей ведут на заглушки.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>{business.name}</h4>
            <p>Торты и десерты на заказ с любовью.</p>
          </div>
          <div>
            <h4>Контакты</h4>
            <p>{business.address}</p>
            <p><a href={`tel:${business.phone}`}>{business.phone}</a></p>
            <p>{business.hours}</p>
          </div>
          <div>
            <h4>Мы в соцсетях</h4>
            <div className="socials">
              <a href={`https://t.me/${business.telegram}`}>Telegram</a>
              <a href={`https://wa.me/${business.whatsapp}`}>WhatsApp</a>
              <a href={`https://vk.com/${business.vk}`}>VK</a>
            </div>
          </div>
        </div>
        <div className="copy">© 2026 {business.name}</div>
      </div>
    </footer>
  )
}
