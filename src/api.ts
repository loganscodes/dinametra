import { useEffect, useState } from "react"
import { ApodData } from "./interfaces/interfaces"

export const ApiNasa = () => {

    const [apod, setApod] = useState<ApodData | null>(null)
    const [error, setError] = useState<string | null>(null)

    const apiKey = 'zQYQLVKCzaLktITM6kPXNc7H5Gr2g7ppSZEsmwQ3'

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
                if (!response.ok) {
                    throw new Error('Fetch data cool')
                }

                const data: ApodData = await response.json()

                setApod(data)

            } catch (error) {
            }
        }

        fetchApod();

        console.log(fetchApod)

    }, [])

    


}