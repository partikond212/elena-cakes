import { business, reviews } from '../data'
import Reveal from './Reveal'

// НЕДОРАБОТКА №5: на телефоне три карточки просто идут столбиком,
// лучше сделать свайп-слайдер. И нет ссылки на все отзывы на Яндекс Картах.
export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <Reveal className="reviews-head">
          <div>
            <h2 className="section-title">Отзывы</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              {business.reviewsCount} отзывов на Яндекс Картах
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="rating-big">{business.rating.toFixed(1)}</div>
            <div style={{ color: '#f5b301' }}>★★★★★</div>
          </div>
        </Reveal>

        <div className="review-grid">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <div className="review">
                <div className="stars">★★★★★</div>
                <p>{r.text}</p>
                <strong>{r.name}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
