import React from 'react'
import { WrapperSaleCard } from './CardSale.styled'

const CardSale = ({select}) => {
    return(
        <WrapperSaleCard >
            <div className='header-card'>
                <p className='header-card-title'>Total de ventas de {select}</p>
                <span>*</span>
            </div>
            <div className='body-card'>
                    <p className='total-sales'>$50.000.0000</p>
                    <span className='last-date'>Septiembre, 2023</span>
            </div>
        </WrapperSaleCard>
    )
};

export default CardSale;