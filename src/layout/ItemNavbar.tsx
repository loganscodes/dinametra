interface Props{
    path: string;
    name: string
}

export const ItemsNavbar = ({ path, name }: Props) => {
    return (
        <li>
            <a href={path} className="block py-2 px-3 rounded md:bg-transparent text-blue-700 md:p-0 text-end " aria-current="page">{name}</a>
        </li>

    )
}
