import React from 'react'

const ProductsList = ({params}:{
    params:{productsID:string}
}) => {
  return (
    <div>ProductsList Details {params.productsID}</div>
  )
}

export default ProductsList