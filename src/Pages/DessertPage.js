import React from 'react'
import Image from 'react-bootstrap/Image'
import { DessertsTable } from '../DessertsTable'
import './DessertPage.scss'

export const DessertPage = () => {
    return (
        <div className='DessertPage'>
            <div className='Center_Content'>
                <div className='DessertPage_Header'>
                    Desserts
                </div>
                <div className='DessertPage_Content'>
                    <DessertsTable />
                </div>
                <div className='DessertPage_Content'>
                    <div className='DessertPage_Pix'>
                        <Image width='800px' rounded={true} fluid={true} src='cheesecake.jpg' alt='cheesecake' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='icecream.jpg' alt='icecream' />
                        <br /><br />
                        <Image width='800px' rounded={true} fluid={true} src='brownie.jpg' alt='brownie' />
                    </div>
                </div>
            </div>
        </div>
    )
}
