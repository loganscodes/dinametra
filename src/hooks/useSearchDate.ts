import { useState } from "react"

export const useSearchDate = () => {

    const [search, setSearch] = useState('')
    

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    return {
        search,
        onChangeSearch
    }


}