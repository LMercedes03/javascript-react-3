import React from 'react'
import { formatUSD } from './Util/Money'
import { OrderTable } from './OrderTable'
import './OrderSection.scss'

export const OrderSection = ({total, order, foodTotal, foodOrder, dessertTotal, dessertOrder}) => {
  return (
    <div className='OrderSection'>
        <div className='OrderSection_Title'>
            Your Order
        </div>
        {
        (total > 0 || foodTotal > 0 || dessertTotal > 0) && (
            <>
            {total > 0 && (
                <>
                <strong>Drinks</strong>
                <OrderTable completeOrder={order} />
                </>
                )}

            {foodTotal > 0 && (
                <>
                <strong>Foods</strong>
                <OrderTable completeOrder={foodOrder} />
                </>
                )}

            {dessertTotal > 0 && (
                <>
                <strong>Desserts</strong>
                <OrderTable completeOrder={dessertOrder} />
                </>
                )}
            </>
        )
        }    
            
        {total === 0 && foodTotal === 0 && dessertTotal === 0 && <>Your cart is empty.</>}
        <hr />
        <div className='OrderSection_Total'>
            Total:<span>{ formatUSD(total + foodTotal + dessertTotal)}</span>
        </div>
    </div>
  )
}
