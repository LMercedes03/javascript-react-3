import React from 'react'
import { useRecoilState } from 'recoil'
import { capitalize } from './Util/Strings'
import { orderedFoods } from './Util/Atoms'
import { FoodTableRow } from './FoodTableRow'
import { foodPrices } from './Util/App.Config'
import './FoodsTable.scss'

export const FoodsTable = () => {
    const [theOrderedFoods, setOrderedFoods] = useRecoilState(orderedFoods)

    const onHandleClick = (item, value) => {
        const foods = {...theOrderedFoods}
        if (value === -1 && foods[item] === 0) {
            return;
        }
        foods[item] += value
        setOrderedFoods(foods)
    }

    return (
        <div className='FoodsTable'>
            <table className='FoodTable_Table'>
                <tbody>
                    {
                        foodPrices.map(i => {
                            return <FoodTableRow 
                                key={ i.id }
                                item={ i.type }
                                displayName={ capitalize(i.type) }
                                theOrderedDrinks={ theOrderedFoods } 
                                onHandleClick={ (item, value) => onHandleClick(item, value) }
                            />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

