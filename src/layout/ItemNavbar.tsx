interface Props{
    path: string;
    name: string
}

export const ItemsNavbar = ({ path, name }: Props) => {
    return (
        <li>
            <a href={path} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">{name}</a>
        </li>

    )
}
