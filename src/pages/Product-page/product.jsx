import React from 'react'
import NavBar from '../../Components/landing-component/navBarComponent/navBar'
import BuyerCatalogue from '../../Components/BuyerCatalogue/BuyerCatalogue'
import AddItemForm from '../../Components/SellerManagement/AddItemForm'

export const Products = () => {
  return (
    <>
      <NavBar />
      <BuyerCatalogue />
      <AddItemForm />
    </>
  )
}
