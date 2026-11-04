import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cakes, categories } from "../data";
import Reveal from "./Reveal";

export default function Catalog() {
  const [active, setActive] = useState("all");

  // НЕДОРАБОТКА №2: фильтр переключается, но список не фильтруется
  const visible = cakes;

  return (
    <section className="section" id="catalog">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Наши торты</h2>
          <p className="section-sub">
            Каждый торт собираем под ваш праздник: меняем начинку, размер и
            оформление.
          </p>
        </Reveal>

        <div className="filters">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`filter ${active === c.id ? "active" : ""}`}
              onClick={() => setActive(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <AnimatePresence>
          <div className="grid">
            {visible.map((cake, i) => (
              <Reveal key={cake.id} delay={i * 0.06}>
                <motion.article
                  className="card"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* НЕДОРАБОТКА №3: вместо фото градиент */}
                  <div className="card-img">
                    <img src={cake?.img} />
                  </div>
                  <div className="card-body">
                    <h3>{cake.title}</h3>
                    <div className="card-price">
                      от {cake.price} ₽ / {cake.unit}
                    </div>
                    <a href="#order" className="btn btn-ghost card-btn">
                      Хочу такой
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
