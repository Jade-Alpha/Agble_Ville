import React from 'react'
import NavBar from '../../Components/landing-component/navBarComponent/navBar'
import BuyerCatalogue from '../../Components/BuyerCatalogue/BuyerCatalogue'
import Cart from '../../../src/Components/CartBasket/Cart'
import CartItem from '../../Components/CartBasket/CartItem'
import CartPage from '../../Components/CartBasket/Cartpage'
import ShoppingCart from '../../Components/CartBasket/ShoppingCart'
import CheckoutForm from '../../Components/CheckoutBasket/CheckoutForm'
import CheckoutPage from '../../Components/CheckoutBasket/CheckoutPage'
import AddItemForm from '../../Components/SellerManagement/AddItemForm'
import EditItemForm from '../../Components/SellerManagement/EditItemForm'
import ItemList from '../../Components/SellerManagement/ItemList'

export const Products = () => {
  return (
<>
    <NavBar/>
    <BuyerCatalogue/>
    <Cart/>
    <CartItem/>
    <CartPage/>
    <ShoppingCart/>
    <CheckoutForm/>
    <CheckoutPage/>
    <EditItemForm/>
    <ItemList/>
    <AddItemForm/>
    </>
  )
}
