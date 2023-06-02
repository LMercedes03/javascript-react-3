import React from 'react'
import { formatUSD } from './Util/Money'
import { getPriceForDessert } from './Util/App.Config'
import './DessertTableRow.scss'

export const DessertTableRow = ({displayName, item, theOrderedDesserts, onHandleClick}) => {
  return (
    <tr className='DessertTableRow'>
        <td>{ displayName }</td>
        <td>{ formatUSD(getPriceForDessert(item)) }</td>
        <td>x</td>
        <td>
            <div className='DessertTableRow_OrderAmount'>{ theOrderedDesserts[item] }</div>
        </td>
        <td>
            <button className='DessertTableRow_Button' onClick={ () => onHandleClick(item, 1) }>+</button>
        </td>
        <td>
            <button className='DessertTableRow_Button' onClick={ () => onHandleClick(item, -1) }>-</button>
        </td>
    </tr>
  )
}
