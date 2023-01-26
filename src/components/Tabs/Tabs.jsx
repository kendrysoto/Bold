import React from 'react'
import { WrapperSaleTabs } from './Tabs.styled'

const Tabs = () => {
    return(
        <WrapperSaleTabs>
            <nav className='container-tabs'>
                <ul className='tabs-menu'>
                    <li className='tabs-item'>Hoy</li>
                    <li className='tabs-item'>Esta Semana</li>
                    <li className='tabs-item'>Septiembre</li>
                </ul>
            </nav>
        </WrapperSaleTabs>
    )
};

export default Tabs;