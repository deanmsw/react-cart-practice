import React, {memo} from 'react'

function Catalog({ onAdd, products }) {

    const renderProduct = product => (
        <div key={product.id}>
           <h2>{product.name}</h2> 
           <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
    )


  return (
    <div>
        <h2>PRODUCTS</h2>
        {products.map(renderProduct)}
    </div>
  )
}

export default memo(Catalog)