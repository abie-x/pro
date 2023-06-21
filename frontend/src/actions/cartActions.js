import axios from 'axios'
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CLEAR_ITEMS, SET_TABLE_NUMBER, SET_RESTAURENT_ID} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`http://127.0.0.1:3001/api/restaurents/menuItem/${id}`)
    console.log('iam in cartactions page')
    console.log(data)
  
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: data._id,
        name: data.item_name,
        image: data.item_image,
        price: data.item_price,
        qty,
        item_stripe_price: data.item_stripe_price
      },
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

  export const removeFromCart = (id) => (dispatch, getState) => {
    console.log('iam in remove from cart screen')
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    })
  
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  }

  export const setTableNumber = (tableno) => (dispatch, getState) => {
    console.log(tableno)
    dispatch({
      type: SET_TABLE_NUMBER,
      payload: tableno,
    })
  }

  export const setRestaurentId = (id) => (dispatch, getState) => {
    console.log(id)
    dispatch({
      type: SET_RESTAURENT_ID,
      payload: id,
    })
  }