export const filters = [
  'Ordenar',
  'Pra retirar',
  'Entrega grátis',
  'Vale-refeição',
  'Distância',
  'Entrega Parceira',
  'Super Restaurante',
];

export const categories = [
  {
    tabs: [
      {
        restaurante: [
          {
            title: 'Mercado',
            image: require('../../assets/categories/Mercado.png'),
          },
          {
            title: 'Promoções',
            image: require('../../assets/categories/Promocoes.png'),
          },
          {
            title: 'Lanches',
            image: require('../../assets/categories/Lanches.png'),
          },
          {
            title: 'Japonesa',
            image: require('../../assets/categories/japonesa.png'),
          },
          {
            title: 'Pizza',
            image: require('../../assets/categories/Pizza.png'),
          },
          {
            title: 'Vale-refeição',
            image: require('../../assets/categories/Vale_refeicao.png'),
          },
          {
            title: 'Açaí',
            image: require('../../assets/categories/Acai.png'),
          },
          {
            title: 'Doces & Bolos',
            image: require('../../assets/categories/Doces_e_bolos.png'),
          },
          {
            title: 'Saudável',
            image: require('../../assets/categories/Saudavel.png'),
          },
        ],
        mercado: [
          {
            title: 'Bebida',
            image: require('../../assets/categories/bebida.png'),
          },
          {
            title: 'Farmácia',
            image: require('../../assets/categories/farmacia.png'),
          },
          {
            title: 'Pet',
            image: require('../../assets/categories/pet.png'),
          },
          {
            title: 'Conveniência',
            image: require('../../assets/categories/conveniencia.png'),
          },
        ],
      },
    ],
    products: [
      {
        title: 'Pão de gergilim',
        image: require('../../assets/categories/pao.png'),
      },
      {
        title: 'Tomate',
        image: require('../../assets/categories/tomate.png'),
      },
      {
        title: 'Alface',
        image: require('../../assets/categories/alface.png'),
      },
    ],
  },
];

export const promotions = [
  {
    restaurante: [
      {key: 1, image: require('../../assets/promotions/first-promotion.png')},
      {key: 2, image: require('../../assets/promotions/second-promotion.png')},
      {key: 3, image: require('../../assets/promotions/third-promotion.png')},
    ],
    mercado: [
      {key: 1, image: require('../../assets/promotions/mercado1.png')},
      {key: 2, image: require('../../assets/promotions/mercado2.png')},
      {key: 3, image: require('../../assets/promotions/mercado3.png')},
    ],
  },
];

export const shops = [
  {
    key: 1,
    title: 'Casa Velha',
    image: require('../../assets/casavelha.png'),
    avaliation: 4.6,
    category: 'Pizzaria',
    distance: 0.6,
    time: '30-40',
    price: 4.99,
  },
  {
    key: 2,
    title: "Mcdonald's",
    image: require('../../assets/mc.jpeg'),
    avaliation: 4.8,
    category: 'Lanches',
    distance: 1.2,
    time: '15-25',
    price: 5.49,
  },
  {
    key: 3,
    title: 'Pamonhas do Cezar',
    image: require('../../assets/pamonhasCezar.png'),
    avaliation: 4.3,
    category: 'Brasileira',
    distance: 1.3,
    time: '27-37',
    price: 6.0,
  },
  {
    key: 4,
    title: 'Tug Sushi',
    image: require('../../assets/tug.jpeg'),
    avaliation: 4.2,
    category: 'Japonesa',
    distance: 3.4,
    time: '15-25',
    price: 9.49,
  },
  {
    key: 5,
    title: 'Subway',
    image: require('../../assets/subway.jpeg'),
    avaliation: 4.6,
    category: 'Lanches',
    distance: 0.3,
    time: '23-33',
    price: 5.49, //gratis
  },
  {
    key: 6,
    title: 'Kennedy',
    image: require('../../assets/kennedy.png'),
    avaliation: 4.8,
    category: 'Padarias',
    distance: 1.2,
    time: '15-25',
    price: 5.49,
  },
]; //fazer em utils
