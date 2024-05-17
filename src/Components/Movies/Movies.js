import CurrentMovies from "./MovieCards/CurrentMovies";
import Example from "./MoviesCarousel/Carousel";

function Movies(){
    return(
        <div>
            <div style={{marginLeft:"30px",marginBottom:"20%"}}>
            <Example/>
            </div>
            <div style={{height:"55%",width:"20%",marginLeft:"40px"}}>
            <CurrentMovies/>
            </div>
        </div>
    )
}
export default Movies