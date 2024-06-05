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
        <div className="App">
            <header className="App-header">
                {apod && (
                    <>
                        <h1>{apod.title}</h1>
                        <p>{apod.date}</p>
                        {apod.media_type === 'image' ? (
                            <img src={apod.url} alt={apod.title} />
                        ) : (
                            <iframe
                                title="space-video" 
                                src={apod.url}
                                frameBorder="0"
                                allow="encrypted-media"
                                allowFullScreen
                            />
                        )}
                        <p>{apod.explanation}</p>
                    </>
                )}
            </header>
        </div>
    )
}

export default Apod