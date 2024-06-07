import { ReactNode } from 'react'
import {  ItemsNavbar } from './ItemNavbar'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <nav className="bg-gray-400 border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <Logo/>
                    <HamburgerButton navbarTarget={'navbar-default'}/>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
                            <ItemsNavbar path='/' name='Home'/>
                            <ItemsNavbar path='/media' name='Media'/>
                            <ItemsNavbar path='/patent' name='Patents' />
                            <ItemsNavbar path='/maps-meteors' name='Meteors Traker' />
                            <ItemsNavbar path='/graphic' name='Graphic Meteors' />
                        </ul>
                    </div>


                </div>
            </nav>

            {children}
        </>





    )
}

export default Layout