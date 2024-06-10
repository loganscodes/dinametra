import { NavLink } from "react-router-dom";
import { ItemNavProps } from "../interfaces/interfacesLayout";

export const ItemsNavbar = ({ path, name }: ItemNavProps) => {
    return (
        <li>
            <NavLink 
                to={path}
                className={({ isActive }) => 
                    `block py-2 px-3 rounded md:bg-transparent text-white md:p-0 text-end ${isActive ? 'underline' : ''}`
                } 
                aria-current="page"
            >
                {name}
            </NavLink>
        </li>
    );
};
