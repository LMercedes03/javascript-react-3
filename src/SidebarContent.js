import { useRecoilValue } from 'recoil'
import { buildOrder } from './Util/Order'
import { buildFoodOrder } from './Util/Order'
import { buildDessertOrder } from './Util/Order'
import Button from 'react-bootstrap/Button'
import { SidebarMenu } from './SidebarMenu'
import { orderedDrinks } from './Util/Atoms'
import { orderedFoods } from './Util/Atoms'
import { orderedDesserts } from './Util/Atoms'
import { OrderSection } from './OrderSection'
import './SidebarContent.scss'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    const {order, total} = buildOrder(useRecoilValue(orderedDrinks)) 
    const {foodOrder, foodTotal} = buildFoodOrder(useRecoilValue(orderedFoods)) 
    const {dessertOrder, dessertTotal} = buildDessertOrder(useRecoilValue(orderedDesserts)) 
    

    return (
        <div className='SidebarContent'>
            <SidebarMenu onHandleLink={(page) => onHandleLink(page)}/>
            <hr />
            
            <OrderSection 
            total={total} 
            order={order}
            foodTotal={foodTotal} 
            foodOrder={foodOrder} 
            dessertTotal={dessertTotal} 
            dessertOrder={dessertOrder} 
            />

            <hr />
            <div className='SidebarContent_Checkout'>
                <Button 
                    variant="primary" 
                    disabled={(total > 0 || foodTotal > 0 || dessertTotal > 0 ) ? false : true} 
                    onClick={() => onHandleCheckout(total, order, foodTotal, foodOrder, dessertTotal, dessertOrder)}>Checkout
                </Button>
            </div>
        </div>
    )
}
