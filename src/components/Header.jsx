import { business } from '../data'

// НЕДОРАБОТКА №1: на телефоне меню не помещается, нужен бургер.
export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">{business.short}</a>
        <nav className="nav">
          <a href="#catalog">Торты</a>
          <a href="#fillings">Начинки</a>
          <a href="#reviews">Отзывы</a>
          <a href="#order" className="btn btn-primary" style={{ padding: '10px 22px', color: '#fff' }}>
            Заказать
          </a>
        </nav>
      </div>
    </header>
  )
}
