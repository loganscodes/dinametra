import { useApod } from "../../hooks/useApod";
import UIErrorText from "../UI/UIErrorText";
import SpinerLoading from "../UI/UISpinerLoading";
import UITitle from "../UI/UITitle";
import { Suspense } from "react";
import React from "react";

const ApodDetails = React.lazy(() => import('./ApodDetails'));

const Apod = () => {

    const { loading, error, apod } = useApod()

    if (loading) {
        return <SpinerLoading />
    }

    if (error) {
        return <UIErrorText/>;
    }
    
    return (

        <div className="mx-5 ">

            <UITitle tag="h1" tooltipID="title" title="Astronomy Picture of the Day" tooltipContent='Astronomy Picture of the Day' className="text-2xl lg:text-4xl font-bold text-center my-10 text-white"/>

            <div className="flex justify-center">
                <Suspense fallback={<SpinerLoading />}>
                    {apod && <ApodDetails apod={apod} />}
                </Suspense>
            </div>

        
        </div>

    )
}

export default Apod