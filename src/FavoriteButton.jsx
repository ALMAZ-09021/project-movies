import {useEffect, useState} from "react";

export function FavoriteButton(){

    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        console.log('the state has changed')
    }, [isFavorite]);

    return(
        <button onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? '❤️' : '🤍'}</button>
 )
}