import { ReactNode, useState } from 'react'
import { ItemsNavbar } from './ItemNavbar'
import Logo from './Logo'
import HamburgerButton from './HamburgerButton'

interface Props {
    children: ReactNode
}

const Layout = ({ children }: Props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav className="border-b-4 border-gray-700  opacity-79  ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <Logo />

                    <HamburgerButton onClick={toggleMenu} />

                    <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8  md:mt-0">
                            <ItemsNavbar path='/' name='Home' />
                            <ItemsNavbar path='/media' name='Media' />
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