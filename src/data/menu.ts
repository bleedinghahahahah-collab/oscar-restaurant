import hotBarbecue from '../assets/dishes/hot-barbecue.jpg';
import hotSkillet from '../assets/dishes/hot-skillet.jpg';
import hotFriedDumplings from '../assets/dishes/hot-fried-dumplings.jpg';
import hotChickenVeggies from '../assets/dishes/hot-chicken-veggies.jpg';
import hotChickenBbqSide from '../assets/dishes/hot-chicken-bbq-side.jpg';
import hotKurutob from '../assets/dishes/hot-kurutob.jpg';
import hotLagmanFried from '../assets/dishes/hot-lagman-fried.jpg';
import hotManty from '../assets/dishes/hot-manty.jpg';
import hotPlovMantyMix from '../assets/dishes/hot-plov-manty-mix.jpg';
import hotPlovLyulya from '../assets/dishes/hot-plov-lyulya.jpg';
import hotPlov from '../assets/dishes/hot-plov.jpg';
import hotChickenTabaka2 from '../assets/dishes/hot-chicken-tabaka-2.jpg';
import hotChakhokhbili from '../assets/dishes/hot-chakhokhbili.jpg';

import tandyrChickenTabaka from '../assets/dishes/tandyr-chicken-tabaka.jpg';

import skewerMushrooms from '../assets/dishes/skewer-mushrooms.jpg';
import skewerLyulyaLamb from '../assets/dishes/skewer-lyulya-lamb.jpg';
import skewerLyulyaBeef from '../assets/dishes/skewer-lyulya-beef.jpg';
import skewerChickenBreast from '../assets/dishes/skewer-chicken-breast.jpg';
import skewerChickenWings from '../assets/dishes/skewer-chicken-wings.jpg';

import soupBorscht from '../assets/dishes/soup-borscht.jpg';
import soupBozbash from '../assets/dishes/soup-bozbash.jpg';
import soupLagman from '../assets/dishes/soup-lagman.jpg';
import soupPiti from '../assets/dishes/soup-piti.jpg';
import soupShurpa from '../assets/dishes/soup-shurpa.jpg';

import saladGreek from '../assets/dishes/salad-greek.jpg';
import saladDayNight from '../assets/dishes/salad-day-night.jpg';
import saladVegCut from '../assets/dishes/salad-veg-cut.jpg';
import saladPrague from '../assets/dishes/salad-prague.jpg';
import saladCabbage from '../assets/dishes/salad-cabbage.jpg';
import saladSkazka from '../assets/dishes/salad-skazka.jpg';
import saladKhumo from '../assets/dishes/salad-khumo.jpg';

import breadLepeshka from '../assets/dishes/bread-lepeshka.jpg';

import sauceKetchup from '../assets/dishes/sauce-ketchup.jpg';
import sauceCheese from '../assets/dishes/sauce-cheese.jpg';
import sauceGarlic from '../assets/dishes/sauce-garlic.jpg';

import sweetBaklava from '../assets/dishes/sweet-baklava.jpg';

import drinkCola from '../assets/dishes/drink-cola.jpg';
import drinkLemonadePear from '../assets/dishes/drink-lemonade-pear.jpg';

export interface Dish {
  id: string;
  name: string;
  image: ImageMetadata;
}

export interface Category {
  id: string;
  label: string;
  note?: string;
  dishes: Dish[];
}

export const categories: Category[] = [
  {
    id: 'hot',
    label: 'Горячие блюда',
    dishes: [
      { id: 'plov', name: 'Плов', image: hotPlov },
      { id: 'plov-lyulya', name: 'Плов с люля-кебаб', image: hotPlovLyulya },
      { id: 'plov-manty-mix', name: 'Микс: плов и манты', image: hotPlovMantyMix },
      { id: 'manty', name: 'Манты', image: hotManty },
      { id: 'lagman-fried', name: 'Лагман жареный', image: hotLagmanFried },
      { id: 'chakhokhbili', name: 'Чахохбили', image: hotChakhokhbili },
      { id: 'chicken-tabaka-hot', name: 'Цыплёнок табака', image: hotChickenTabaka2 },
      { id: 'chicken-veggies', name: 'Жаровая курица с овощами', image: hotChickenVeggies },
      { id: 'chicken-bbq-side', name: 'Куриное барбекю с гарниром', image: hotChickenBbqSide },
      { id: 'barbecue', name: 'Барбекю', image: hotBarbecue },
      { id: 'skillet', name: 'Горячая сковородка', image: hotSkillet },
      { id: 'fried-dumplings', name: 'Жареные пельмени', image: hotFriedDumplings },
      { id: 'kurutob', name: 'Куротоб', image: hotKurutob },
    ],
  },
  {
    id: 'tandyr',
    label: 'В тандыре',
    note: 'Готовится в глиняной печи на открытом огне',
    dishes: [{ id: 'chicken-tabaka-tandyr', name: 'Цыплёнок табака в тандыре', image: tandyrChickenTabaka }],
  },
  {
    id: 'skewer',
    label: 'Шашлык',
    dishes: [
      { id: 'lyulya-lamb', name: 'Люля-кебаб из баранины', image: skewerLyulyaLamb },
      { id: 'lyulya-beef', name: 'Люля-кебаб из говядины', image: skewerLyulyaBeef },
      { id: 'chicken-breast', name: 'Шашлык из куриной грудки', image: skewerChickenBreast },
      { id: 'chicken-wings', name: 'Шашлык из куриных крыльев', image: skewerChickenWings },
      { id: 'mushrooms', name: 'Грибы на мангале', image: skewerMushrooms },
    ],
  },
  {
    id: 'soup',
    label: 'Супы',
    dishes: [
      { id: 'shurpa', name: 'Шурпа', image: soupShurpa },
      { id: 'lagman-soup', name: 'Суп Лагман', image: soupLagman },
      { id: 'piti', name: 'Суп Пити', image: soupPiti },
      { id: 'bozbash', name: 'Суп Бозбаш', image: soupBozbash },
      { id: 'borscht', name: 'Борщ', image: soupBorscht },
    ],
  },
  {
    id: 'salad',
    label: 'Салаты',
    dishes: [
      { id: 'khumo', name: 'Хумо', image: saladKhumo },
      { id: 'greek', name: 'Греческий салат', image: saladGreek },
      { id: 'day-night', name: '«День и ночь»', image: saladDayNight },
      { id: 'skazka', name: '«Сказка»', image: saladSkazka },
      { id: 'prague', name: 'Пражский салат', image: saladPrague },
      { id: 'veg-cut', name: 'Овощная нарезка', image: saladVegCut },
      { id: 'cabbage', name: 'Салат из капусты', image: saladCabbage },
    ],
  },
  {
    id: 'bread',
    label: 'Хлеб',
    dishes: [{ id: 'lepeshka', name: 'Лепёшка', image: breadLepeshka }],
  },
  {
    id: 'sauce',
    label: 'Соусы',
    dishes: [
      { id: 'garlic', name: 'Чесночный соус', image: sauceGarlic },
      { id: 'cheese', name: 'Сырный соус', image: sauceCheese },
      { id: 'ketchup', name: 'Кетчуп', image: sauceKetchup },
    ],
  },
  {
    id: 'sweet',
    label: 'Сладкое',
    dishes: [{ id: 'baklava', name: 'Пахлава', image: sweetBaklava }],
  },
  {
    id: 'drink',
    label: 'Напитки',
    dishes: [
      { id: 'lemonade-pear', name: 'Лимонад «Натахтари» грушевый', image: drinkLemonadePear },
      { id: 'cola', name: 'Кока-Кола', image: drinkCola },
    ],
  },
];

export interface PopularDish {
  name: string;
  categoryLabel: string;
  image: ImageMetadata;
  description: string;
  size?: 'lg' | 'md';
}

export const popularDishes: PopularDish[] = [
  {
    name: 'Плов',
    categoryLabel: 'Горячие блюда',
    image: hotPlov,
    description: 'Рассыпчатый рис, томлёная баранина и золотистая морковь — блюдо, с которого начинается доверие к кухне.',
    size: 'lg',
  },
  {
    name: 'Люля-кебаб из баранины',
    categoryLabel: 'Шашлык',
    image: skewerLyulyaLamb,
    description: 'Рубленое мясо на углях, сочное внутри и с дымной корочкой снаружи.',
    size: 'md',
  },
  {
    name: 'Цыплёнок табака в тандыре',
    categoryLabel: 'В тандыре',
    image: tandyrChickenTabaka,
    description: 'Прижатая курица томится в глиняной печи до хрустящей корочки.',
    size: 'md',
  },
  {
    name: 'Манты',
    categoryLabel: 'Горячие блюда',
    image: hotManty,
    description: 'Лепка вручную, наваристый мясной сок внутри тонкого теста.',
    size: 'md',
  },
  {
    name: 'Хумо',
    categoryLabel: 'Салаты',
    image: saladKhumo,
    description: 'Тёплый салат с курицей, грибами и хрустящими овощами.',
    size: 'md',
  },
  {
    name: 'Пахлава',
    categoryLabel: 'Сладкое',
    image: sweetBaklava,
    description: 'Слои теста, орехи и мёд — сладкое завершение восточного стола.',
    size: 'md',
  },
];
