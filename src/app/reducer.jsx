const SELECT_PLAYER_ONE = 'dbz/SELECT_PLAYER_ONE'
const SELECT_PLAYER_TWO = 'dbz/SELECT_PLAYER_TWO'
const CONFIRM_PLAYER_ONE = 'dbz/CONFIRM_PLAYER_ONE'
const CONFIRM_PLAYER_TWO = 'dbz/CONFIRM_PLAYER_TWO'
const START = 'dbz/START'
const FINISH = 'dbz/FINISH'
const LOAD_FIGHT = 'dbz/LOAD_FIGHT'

const initialState = {
  characters: [
    {
      name: 'Goku',
      icon: require('../img/menu_goku.jpg'),
      hero: require('../img/hero_goku.png'),
      full: require('../img/full_goku.png'),
    },
    {
      name: 'Vegeta',
      icon: require('../img/menu_vegeta.jpg'),
      hero: require('../img/hero_vegeta.png'),
      full: require('../img/full_vegeta.png'),
    },
    {
      name: 'Frieza',
      icon: require('../img/menu_freeza.jpg'),
      hero: require('../img/hero_freeza.png'),
      full: require('../img/full_freeza.png'),
    },
    {
      name: 'Cell',
      icon: require('../img/menu_cell.jpg'),
      hero: require('../img/hero_cell.png'),
      full: require('../img/full_cell.png'),
    },
    {
      name: 'Buu',
      icon: require('../img/menu_buu.jpg'),
      hero: require('../img/hero_buu.png'),
      full: require('../img/full_buu.png'),
    },
    {
      name: 'Piccolo',
      icon: require('../img/menu_piccolo.jpg'),
      hero: require('../img/hero_piccolo.png'),
      full: require('../img/full_piccolo.png'),
    },
    {
      name: 'Broly',
      icon: require('../img/menu_broly.JPG'),
      hero: require('../img/hero_broly.png'),
      full: require('../img/full_broly.png'),
    },
    {
      name: 'Gohan',
      icon: require('../img/menu_gohan.jpg'),
      hero: require('../img/hero_gohan.png'),
      full: require('../img/full_gohan.png'),
    },
  ],
  player1: {
    character: null,
    isPlayerReady: false,
  },
  player2: {
    character: null,
    isPlayerReady: false
  },
  start: false,
  finish: false,
  loadFight: false,
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_PLAYER_ONE:
      return {
        ...state,
        player1: {
          ...state.player1,
          character: action.payload
        }
      };
    case CONFIRM_PLAYER_ONE:
      return {
        ...state,
        player1: {
          ...state.player1,
          isPlayerReady: true,
        }
      };
    case SELECT_PLAYER_TWO:
      return {
        ...state,
        player2: {
          ...state.player2,
          character: action.payload
        }
      };
    case CONFIRM_PLAYER_TWO:
      return {
        ...state,
        player2: {
          ...state.player2,
          isPlayerReady: true,
        }
      };
    case START:
      return {
        ...state,
        start: true,
      };
    case FINISH:
      return {
        ...state,
        finish: true,
      };
    case LOAD_FIGHT:
      return {
        ...state,
        loadFight: true,
      };
    default:
      return state;
  }
}

const selectPlayerOne = (character) => ({ type: SELECT_PLAYER_ONE, payload: character })
const selectPlayerTwo = (character) => ({ type: SELECT_PLAYER_TWO, payload: character })
const confirmPlayerOne = () => ({ type: CONFIRM_PLAYER_ONE })
const confirmPlayerTwo = () => ({ type: CONFIRM_PLAYER_TWO })
const start = () => ({ type: START })
const finish = () => ({ type: FINISH })
const loadFight = () => ({ type: LOAD_FIGHT })

export const actions = {
  selectPlayerOne,
  selectPlayerTwo,
  confirmPlayerOne,
  confirmPlayerTwo,
  start,
  finish,
  loadFight,
}