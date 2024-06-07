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

            <UITitle title="Astronomy Picture of the Day" tooltipContent='Astronomy Picture of the Day'/>

            <div className="flex justify-center">
                <Suspense fallback={<SpinerLoading />}>
                    {apod && <ApodDetails apod={apod} />}
                </Suspense>
            </div>

        
        </div>

    )
}

export default Apod