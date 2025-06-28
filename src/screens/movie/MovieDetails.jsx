import {useParams} from 'react-router-dom';
import {lazy, Suspense, useMemo} from "react";
import {MOVIES} from "../home/movies.data.js";


const LazyMovieComments = lazy(() =>
    import ('./MovieComments').then(c => ({
        default:c.MovieComments
    }))
)

export function MovieDetails() {

    const {id} = useParams()

    const movie = useMemo(() => {
        return MOVIES.find((movie) => movie.trailerYoutubeId === id)
    }, [id])

    if(!movie) return <p>Movie not found</p>

    return(
    <div>
        <img
        src={movie.image}
        alt="Movie Poster"
        className="w-full h-auto object-cover"
        />

        <h1>Карточка фильма #{id}</h1>
        <h2>{movie.name}</h2>
        <Suspense fallback={<div>Loading...</div>}>
        <LazyMovieComments/>
        </Suspense>
    </div>
    )
}