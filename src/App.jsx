import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Fillings from './components/Fillings'
import OrderForm from './components/OrderForm'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Fillings />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
      {/* НЕДОРАБОТКА №8: нет плавающей кнопки WhatsApp на мобильном */}
    </>
  )
}
