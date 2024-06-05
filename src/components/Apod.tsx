import { useApod } from "../hooks/useApod";

const Apod = () => {

    const { loading, error, apod } = useApod()

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (

        <div className="mx-5">
            <h1 className="text-4xl font-bold text-center  my-10">Astronomy Picture of the Day</h1>

            <img src={apod?.hdurl} alt="" />

            <p className="text-base font-bold">{apod?.date}</p>

            <div className="flex flex-col items-center gap-5 justify-center">
                <h5 className="text-3xl font-semibold">{apod?.title}</h5>
                <p className=" w-[70%] text-justify">{apod?.explanation}</p>

                <img src={apod?.url} alt="" />

            </div>

        </div>

    )
}

export default Apod