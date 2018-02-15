
const initalState = {
  characters: [
    {
      name: 'goku',
      icon: require('../img/menu_goku.jpg'),
      hero: require('../img/hero_goku.png'),
      full: require('../img/full_goku.png'),
    },
    {
      name: 'vegeta',
      icon: require('../img/menu_vegeta.jpg'),
      hero: require('../img/hero_vegeta.png'),
      full: require('../img/full_vegeta.png'),
    },
    {
      name: 'frieza',
      icon: require('../img/menu_freeza.jpg'),
      hero: require('../img/hero_freeza.png'),
      full: require('../img/full_freeza.png'),
    },
    {
      name: 'cell',
      icon: require('../img/menu_cell.jpg'),
      hero: require('../img/hero_cell.png'),
      full: require('../img/full_cell.png'),
    },
    {
      name: 'buu',
      icon: require('../img/menu_buu.jpg'),
      hero: require('../img/hero_buu.png'),
      full: require('../img/full_buu.png'),
    },
    {
      name: 'piccolo',
      icon: require('../img/menu_piccolo.jpg'),
      hero: require('../img/hero_piccolo.png'),
      full: require('../img/full_piccolo.png'),
    },
    {
      name: 'broly',
      icon: require('../img/menu_broly.JPG'),
      hero: require('../img/hero_broly.png'),
      full: require('../img/full_broly.png'),
    },
    {
      name: 'gohan',
      icon: require('../img/menu_gohan.jpg'),
      hero: require('../img/hero_gohan.png'),
      full: require('../img/full_gohan.png'),
    },
  ],
}

export function reducer(state = initalState, action) {
  switch(action.type) {
    default:
      return state;
  }
}