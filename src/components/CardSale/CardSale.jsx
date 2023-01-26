import React from 'react'
import { WrapperSaleCard } from './CardSale.styled'

const CardSale = () => {
    return(
        <WrapperSaleCard >
            <div className='header-card'>
                <p className='header-card-title'>Total de venstas de septiembre</p>
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