import React from 'react'

export default function Cart({onRemove, items}) {

    const renderCartItem = item => (
        <div>
            {item.name} x {item.quantity} = ${item.quantity * item.price} 
            <button onClick={() => onRemove(item)}>remove</button>
        </div>
    )

    const total = items.reduce((total, item) => {
    return total + item.price * item.quantity
    }, 0)

  return (
    <div className='cart'>
        <h2>cart</h2>
        {items.map( renderCartItem )}
        <hr></hr>
        total: {total}
    </div>
  )
}
