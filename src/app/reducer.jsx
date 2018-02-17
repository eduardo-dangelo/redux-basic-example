const SELECT_PLAYER_ONE = 'dbz/SELECT_PLAYER_ONE'
const SELECT_PLAYER_TWO = 'dbz/SELECT_PLAYER_TWO'
const CONFIRM_PLAYER_ONE = 'dbz/CONFIRM_PLAYER_ONE'
const CONFIRM_PLAYER_TWO = 'dbz/CONFIRM_PLAYER_TWO'
const EDIT_PLAYER_ONE = 'dbz/EDIT_PLAYER_ONE'
const EDIT_PLAYER_TWO = 'dbz/EDIT_PLAYER_TWO'
const FINISH = 'dbz/FINISH'

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
  player1: null,
  player2: {},
  isPlayer1Ready: false,
  isPlayer2Ready: false,
  finish: false,
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SELECT_PLAYER_ONE:
      return {
        ...state,
        player1: action.payload,
      };
    case CONFIRM_PLAYER_ONE:
      return {
        ...state,
        isPlayer1Ready: true,
      };
    case SELECT_PLAYER_TWO:
      return {
        ...state,
        player2: action.payload,
      };
    case CONFIRM_PLAYER_TWO:
      return {
        ...state,
        isPlayer2Ready: true,
      };
    case EDIT_PLAYER_ONE:
      return {
        ...state,
        isPlayer1Ready: false,
      };
    case EDIT_PLAYER_TWO:
      return {
        ...state,
        isPlayer2Ready: false,
      };
    case FINISH:
      return {
        ...state,
        finish: true,
      };
    default:
      return state;
  }
}

const selectPlayerOne = (character) => ({ type: SELECT_PLAYER_ONE, payload: character })
const selectPlayerTwo = (character) => ({ type: SELECT_PLAYER_TWO, payload: character })
const confirmPlayerOne = () => ({ type: CONFIRM_PLAYER_ONE })
const confirmPlayerTwo = () => ({ type: CONFIRM_PLAYER_TWO })
const editPlayerOne = () => ({ type: EDIT_PLAYER_ONE })
const editPlayerTwo = () => ({ type: EDIT_PLAYER_TWO })
const finish = () => ({ type: FINISH })

export const actions = {
  selectPlayerOne,
  selectPlayerTwo,
  confirmPlayerOne,
  confirmPlayerTwo,
  editPlayerOne,
  editPlayerTwo,
  finish,
}