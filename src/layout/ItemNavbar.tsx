import { ItemNavProps } from "../interfaces/interfacesLayout"


export const ItemsNavbar = ({ path, name }: ItemNavProps) => {
    return (
        <li>
            <a href={path} className="block py-2 px-3 rounded md:bg-transparent text-white md:p-0 text-end " aria-current="page">{name}</a>
        </li>

    )
}
