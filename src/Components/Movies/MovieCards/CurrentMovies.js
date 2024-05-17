import { Card,CardImg,CardBody,CardTitle,CardText } from "reactstrap";
import "./Moviecards.css"
function CurrentMovies(){
    return(
            <>
            <div className="moviescontainer">
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th?id=OIP.NsQ_4p4ZirWqcZwP2ky_QgAAAA&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                    style={{
                        height: 190
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Tillu Square
                    </CardTitle>
                    <CardText>
                        Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.1/10</p></div><p>95.8K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/manjummel-boys-20231208184131-21519.jpg"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Manjummel Boys (Telugu)
                    </CardTitle>
                    <CardText>
                        Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        U
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.0/10</p></div><p>19K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://wallpaperaccess.com/full/9547036.jpg"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Jersey
                    </CardTitle>
                    <CardText>
                        Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        U
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.3/10</p></div><p>71.6K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
            </div>

            <div className="moviescontainer">
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://www.filmiforest.com/img/movies/5785/family-star-photo-91516.jpg"
                    style={{
                        height: 190
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Family Star
                    </CardTitle>
                    <CardText>
                        Telugu,Tamil
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>7.2/10</p></div><p>41.7K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th?id=OIP.PaPYwdtvx8641-N0juA4XAAAAA&w=205&h=304&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                    Godzilla x Kong
                    </CardTitle>
                    <CardText>
                        English,Hindi,Telugu,Tamil
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>8.7/10</p></div><p>103K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://images.filmibeat.com/webp/img/popcorn/movie_posters/aavesham-20240312101525-22446.jpg"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Aavesham
                    </CardTitle>
                    <CardText>
                        Malyalam
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.3/10</p></div><p>72.1K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
            </div>

            <div className="moviescontainer">
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th?id=OIP.cj9u2sYkt5l4YZ6wuhAm4AHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                    style={{
                        height: 190
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Geethaanjaili Malli vachindii
                    </CardTitle>
                    <CardText>
                        Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>7.8/10</p></div><p>5.2K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://popcornreviewss.com/wp-content/uploads/2021/05/Happy-Days-2007-Telugu-Movie-Review.jpg"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Happy Days
                    </CardTitle>
                    <CardText>
                        Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        U
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.7/10</p></div><p>1.4K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th?id=OIP.LngmnEAMx-27QJlIQJG1eQAAAA&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Dune Part Two
                    </CardTitle>
                    <CardText>
                        English,Hindi
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.1/10</p></div><p>46.3K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
            </div>

            <div className="moviescontainer">
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th?id=OIP.6B_m2YGGPgQWjXJtOA73rgAAAA&w=209&h=297&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                    style={{
                        height: 190
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Hanuman
                    </CardTitle>
                    <CardText>
                        Telugu,Tamil,Hindi,Kannada,Malayalam
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.4/10</p></div><p>456.7K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th/id/OIP.t0SEz52Lzd5xyiQhfAysHQHaLj?w=115&h=180&c=7&r=0&o=5&dpr=1.7&pid=1.7"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                    Arjun Reddy
                    </CardTitle>
                    <CardText>
                        Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        A
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>8.9/10</p></div><p>9.6K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
                <div>
                <Card className="my-2 movieCard">
                    <CardImg
                    alt="Card image cap"
                    src="https://th.bing.com/th?id=OIP.-18V2_7UhRqnjzeIjVZobQHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Vikram
                    </CardTitle>
                    <CardText>
                    Tamil,Telugu
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        UA
                        </small>
                    </CardText>
                    <CardText style={{backgroundColor:"black",color:"white",borderRadius:"2px"}}><div className="ratingCard"><div style={{display:"flex"}}><img src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid" alt="star" width={15} height={20} style={{margin:"1px"}}/><p>9.7/10</p></div><p>247.1K Votes</p></div></CardText>
                    </CardBody>
                </Card>
                </div>
            </div>
            </>
    )
}
export default CurrentMovies;