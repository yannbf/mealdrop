import { Restaurant } from '../types'

const food = [
  {
    id: 1,
    name: 'Cheeseburger',
    description: 'Nice grilled burger with cheese',
    price: 8.5,
  },
  {
    id: 2,
    name: 'Fries',
    description: 'Fried french fries',
    price: 2.5,
  },
]

const dessert = [
  {
    id: 3,
    name: 'Vanilla ice cream',
    description: 'Ice cream',
    price: 2,
  },
]

const drinks = [
  {
    id: 4,
    name: 'Coca-Cola',
    price: 1.75,
  },
  {
    id: 5,
    name: 'Fanta',
    price: 1.5,
  },
  {
    id: 6,
    name: 'Sprite',
    price: 1.5,
  },
]

export const restaurantsCompleteData: Restaurant[] = [
  {
    id: '1',
    name: 'Burger Kingdom',
    mapsUrl: 'https://goo.gl/maps/EnyNcNJtvC3QkFgJ6',
    url: 'https://www.sterkstaaltje.com/',
    address: 'Staalstraat 12 1011 JL Amsterdam',
    specialty: 'Nicest place for burgers',
    photoUrl:
      'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1003&q=20',
    rating: 4.2,
    categories: ['burgers', 'comfort food'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '2',
    name: 'Kara Fin',
    mapsUrl: 'https://goo.gl/maps/M5wMk7oKUn5BWWtp7',
    url: 'http://www.karafirin.nl/',
    address: 'Tijnmuiden 5F 1046 AK Amsterdam',
    specialty: 'Sarma (wine leafs with rice)',
    photoUrl:
      'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    categories: ['burgers', 'pizza'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '3',
    name: 'De Oliewinkel',
    mapsUrl: 'https://goo.gl/maps/cpjHq1mNPGqWELFC9',
    url: 'https://deoliewinkelamsterdam.nl/',
    address: 'Brouwersgracht 119 1015 GD Amsterdam',
    specialty: 'Olive oil',
    photoUrl: 'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
    categories: ['comfort food'],
    menu: {
      food,
      dessert,
      drinks,
    },
    isClosed: true,
  },
  {
    id: '4',
    name: "'t Kuyltje",
    mapsUrl: 'https://goo.gl/maps/C5HXbGpa2qKuKshq7',
    url: 'https://www.kuyltje.nl/',
    address: 'GASTHUISMOLENSTEEG 9 1016 AM AMSTERDAM',
    specialty: 'Pastrami sandwiches',
    photoUrl: 'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
    categories: ['comfort food'],
    isNew: true,
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '5',
    name: 'Ciao Bella',
    mapsUrl: 'https://g.page/ciaobellaamsterdam?share',
    url: 'http://ciaobellaamsterdam.nl/',
    address: 'Prinsengracht 1055/H 1017JE Amsterdam',
    specialty: 'Takeaway lasagna',
    photoUrl:
      'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    categories: ['pizza'],
    isNew: true,
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '6',
    name: 'Soup Eno',
    mapsUrl: 'https://goo.gl/maps/KRoR7xfUDKZMPLqV8',
    url: 'https://soupenzo.nl/',
    address: 'Nieuwe Spiegelstraat 54',
    specialty: 'Spinach soup',
    photoUrl: 'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
    categories: ['asian'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '7',
    name: 'Warung Atika',
    mapsUrl: 'https://goo.gl/maps/RidH93JHj9SuNrKFA',
    url: 'https://www.warungatika.nl/',
    address: 'Van Woustraat 232 1073 NC Amsterdam',
    specialty: '€6 meals',
    photoUrl: 'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
    categories: ['sushi', 'asian'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '8',
    name: "Yuan's Hot Pot",
    mapsUrl: 'https://g.page/yuanhotpot',
    url: 'https://yuanhotpot.com/',
    address: 'Rijnstraat 51,1078PZ Amsterdam',
    specialty: 'cheap and fun evening meals',
    photoUrl: 'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
    categories: ['thai'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '9',
    name: 'BAK',
    mapsUrl: 'https://g.page/BAKRESTAURANT',
    url: 'https://bakrestaurant.nl/en/',
    address: 'Van Diemenstraat 408, 1013 CR Amsterdam',
    specialty: 'expensive dinners',
    photoUrl: 'https://duyt4h9nfnj50.cloudfront.net/search_home/FastFood.jpg',
    categories: ['indian'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
  {
    id: '10',
    name: 'FOER',
    mapsUrl: 'https://g.page/foer-amsterdam',
    url: 'http://foeramsterdam.nl/',
    address: 'Cruquiusweg 9, 1019 AT Amsterdam',
    specialty: 'expensive dinners',
    photoUrl:
      'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    categories: ['comfort food'],
    menu: {
      food,
      dessert,
      drinks,
    },
  },
]

export const restaurants = restaurantsCompleteData.map((restaurant) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, mapsUrl, url, address, menu, ...rest } = restaurant
  return {
    ...rest,
  }
})
