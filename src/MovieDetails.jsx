import {useParams} from 'react-router-dom';
import {useMemo} from "react";
import {MOVIES} from "./movies.data.js";

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
    </div>
    )
}