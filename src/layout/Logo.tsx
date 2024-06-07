import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./NASA_logo.png" className="w-10 h-10 object-contain" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">NASA</span>
        </Link>
    )
}

export default Logo