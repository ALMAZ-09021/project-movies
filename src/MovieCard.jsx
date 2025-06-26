export function MovieCard({image,rating}){
    return (
        <div>
            <div>
                IMDb rating: {rating}
            </div>
            <img src={image} alt=""/>
        </div>
    )
}