import React from 'react'

const CartSidebar = ({ isCartOpen }) => {
  if (!isCartOpen) {
    return null
  }

  return <div>Content goes here</div>
}

export default CartSidebar
