// Все данные о кондитерской в одном месте.
// Для следующего клиента меняешь только этот файл (и фото).

export const business = {
  name: "Кондитерская мастерская Елены Кунеевской",
  short: "Мастерская Елены",
  city: "станица Динской",
  address: "Пролетарская ул., 1А, станица Динская",
  phone: "+7 (918) 934-01-34", // TODO: настоящий номер
  whatsapp: "79189341034", // TODO: номер без +, для ссылки wa.me
  telegram: "konditerskayamasterskaya", // TODO
  vk: "id709724480", // TODO
  hours: "Ежедневно до 19:00",
  rating: 5.0,
  ratingsCount: 226,
  reviewsCount: 115,
};

// TODO: заменить gradient на реальные фото (поле image)
export const cakes = [
  {
    id: 1,
    title: "Торт с клубникой и цветами",
    category: "birthday",
    price: 2200,
    unit: "кг",
    gradient: "linear-gradient(135deg,#f9d5d3,#f3a6a0)",
    img: "https://avatars.mds.yandex.net/get-altay/18112381/2a0000019cfaf2506e25233191bbaf286cae/XXXL",
  },
  {
    id: 2,
    title: "Детский торт с фигурками",
    category: "kids",
    price: 2500,
    unit: "кг",
    gradient: "linear-gradient(135deg,#d7ecf5,#9fd0e6)",
    img: "https://avatars.mds.yandex.net/get-altay/16437561/2a0000019a29fc068314ff15313a96d70772/XXXL",
  },
  {
    id: 3,
    title: "Свадебный ",
    category: "wedding",
    price: 2800,
    unit: "кг",
    gradient: "linear-gradient(135deg,#fbf3e6,#ead6b5)",
    img: "https://avatars.mds.yandex.net/get-altay/17677530/2a0000019d2955512c9f77ccb244aff71c80/XXXL",
  },
  {
    id: 4,
    title: "Бенто-торт",
    category: "bento",
    price: 1500,
    unit: "шт",
    gradient:
      "https://avatars.mds.yandex.net/i?id=6e9fd7c24aa08b224a48c871d25d7addc3135801-5484758-images-thumbs&n=13",
  },
  {
    id: 5,
    title: "Шоколадный с ягодами",
    category: "birthday",
    price: 2300,
    unit: "кг",
    gradient: "linear-gradient(135deg,#d9b8a3,#8a5a44)",
    img: "https://avatars.mds.yandex.net/get-altay/20661430/2a0000019fbdfc58bdbe813dc2986eaa5f77/XXXL",
  },
  {
    id: 6,
    title: "Куличи, набор ",
    category: "desserts",
    price: 1200,
    unit: "набор",
    gradient: "linear-gradient(135deg,#fde2c8,#f6b78a)",
    img: "https://avatars.mds.yandex.net/get-altay/18132699/2a0000019d29552b694bab4c83e475e78cfc/XXXL",
  },
];

export const categories = [
  { id: "all", label: "Все" },
  { id: "birthday", label: "На день рождения" },
  { id: "kids", label: "Детские" },
  { id: "wedding", label: "Свадебные" },
  { id: "bento", label: "Бенто" },
  { id: "desserts", label: "Десерты" },
];

// TODO: уточнить начинки у Елены
export const fillings = [
  {
    name: "Клубничный бисквит",
    desc: "Ванильный бисквит, клубничное конфи, сливочный крем",
  },
  { name: "Шоколад-вишня", desc: "Шоколадный бисквит, пьяная вишня, ганаш" },
  { name: "Красный бархат", desc: "Классика с крем-чизом" },
  { name: "Медовик", desc: "Медовые коржи, сметанный крем" },
  { name: "Сникерс", desc: "Карамель, арахис, шоколадный бисквит" },
  { name: "Морковный", desc: "Пряный бисквит, грецкий орех, крем-чиз" },
];

// TODO: взять реальные отзывы с Яндекс Карт (с разрешения Елены)
export const reviews = [
  {
    name: "Анна",
    text: "Заказывали торт на день рождения дочки, все гости были в восторге. Очень вкусно и красиво!",
  },
  {
    name: "Ирина",
    text: "Беру торты только здесь уже второй год. Всегда свежие и не приторные.",
  },
  {
    name: "Сергей",
    text: "Сделали свадебный торт точно как на картинке. Спасибо Елене!",
  },
];
