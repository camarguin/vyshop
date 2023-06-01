import React from 'react'

const WishlistSidebar = ({ isWishListOpen }) => {
  if (!isWishListOpen) {
    return null
  }

  return <div>WishList Content goes here</div>
}

export default WishlistSidebar
