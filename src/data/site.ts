export const site = {
  name: 'Оскар',
  legalName: 'У Оскара',
  city: 'Ульяновск',
  tagline: 'Халяльная кухня Востока',
  description:
    'Ресторан халяльной кухни «Оскар» в Ульяновске — плов, шашлык, тандыр и восточные сладости в зале, достойном лучших ресторанов Дубая. Столик и доставка по звонку.',

  phones: [
    { display: '+7 (991) 462-16-24', tel: '+79914621624', wa: '79914621624' },
    { display: '+7 (951) 093-37-00', tel: '+79510933700', wa: '79510933700' },
  ],

  address: 'ул. Льва Толстого, 54/13, цокольный этаж',
  addressCity: 'Ульяновск',

  hours: { open: '10:00', close: '22:00' },

  yandexMapsUrl: 'https://yandex.ru/maps/-/CTFxRCoW',
  yandexMapEmbedSrc:
    'https://yandex.ru/map-widget/v1/?text=' +
    encodeURIComponent('Ульяновск, ул. Льва Толстого, 54/13, У Оскара') +
    '&z=16',

  rating: 4.4,
  reviewCount: 1232,
  avgBillRub: 400,
} as const;

export function waLink(wa: string, text: string) {
  return `https://wa.me/${wa}?text=${encodeURIComponent(text)}`;
}

export const reserveMessage = 'Здравствуйте! Хочу забронировать столик в «Оскар».';
export const deliveryMessage = 'Здравствуйте! Хочу сделать заказ на доставку из «Оскар».';
