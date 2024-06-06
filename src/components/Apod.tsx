import { useApod } from "../hooks/useApod";
import SpinerLoading from "./SpinerLoading";

const Apod = () => {

    const { loading, error, apod } = useApod()

    if (loading) {
        return <SpinerLoading />
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (

        <div className="mx-5">
            <h1 className="text-4xl font-bold text-center  my-10">Astronomy Picture of the Day</h1>

            <div className="flex justify-center ">
                <div className=" flex flex-col justify-center items-center w-[60%] gap-5 shadow-2xl rounded-lg mb-28 py-10">

                    <h1 className="font-bold text-4xl">{apod?.title}</h1>

                    <img src={apod?.url} alt="" />

                    <h4 className="text-2xl font-semibold">Information</h4>

                    <p> <span className="font-semibold">Author:</span>  {apod?.copyright} <span className="font-semibold">Date:</span> {apod?.date}</p>

                    <h5 className="text-3xl font-semibold">Explanation</h5>

                    <p className=" text-justify text-lg mx-5">{apod?.explanation}</p>

                </div>
            </div>


        </div>

    )
}

export default Apod