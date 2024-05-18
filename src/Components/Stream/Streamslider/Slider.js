import React from "react";
import Slider from "react-slick";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "./Slider.css";

function Streamslider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="SliderContainer">
            <div>
            <Card className="my-2 movieCard">
              <CardImg
                alt="Card image cap"
                src="https://www.filmiforest.com/img/movies/5785/family-star-photo-91516.jpg"
                style={{ height: 190 }}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Family Star</CardTitle>
                <CardText>Telugu, Tamil</CardText>
                <CardText>
                  <small className="text-muted">UA</small>
                </CardText>
                <CardText
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "2px",
                  }}
                >
                  <div className="ratingCard">
                    <div style={{ display: "flex" }}>
                      <img
                        src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid"
                        alt="star"
                        width={15}
                        height={20}
                        style={{ margin: "1px" }}
                      />
                      <p>7.2/10</p>
                    </div>
                    <p>41.7K Votes</p>
                  </div>
                </CardText>
              </CardBody>
            </Card>
            </div>
            <div>
            <h1 className="MovieName">Family Star</h1>
            <p className="details">Genre: Drama, Family</p>
            <p className="details">Telugu, Tamil</p>
            <p className="details">
            Govardhan (Vijay Deverakonda), a devoted architect from Hyderabad, juggles supporting his extended family while seeking a partner who understands his commitments. When he discovers Indu (Mrunal Thakur) thesis on his family, he challenges her, leading to unexpected twists as they navigate misunderstandings and eventually find love amidst
            </p>
            </div>
          </div>
        </div>
        <div>
          <div className="SliderContainer">
            <div>
            <Card className="my-2 movieCard">
              <CardImg
                alt="Card image cap"
                src="https://th.bing.com/th?id=OIP.NsQ_4p4ZirWqcZwP2ky_QgAAAA&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2"
                style={{ height: 190 }}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">Tillu Square</CardTitle>
                <CardText>Telugu</CardText>
                <CardText>
                  <small className="text-muted">UA</small>
                </CardText>
                <CardText
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "2px",
                  }}
                >
                  <div className="ratingCard">
                    <div style={{ display: "flex" }}>
                      <img
                        src="https://cdn-icons-png.freepik.com/256/10797/10797251.png?ga=GA1.1.1211982432.1675417347&semt=ais_hybrid"
                        alt="star"
                        width={15}
                        height={20}
                        style={{ margin: "1px" }}
                      />
                      <p>9.1/10</p>
                    </div>
                    <p>95.8K Votes</p>
                  </div>
                </CardText>
              </CardBody>
            </Card>
            </div>
            <div>
            <h1 className="MovieName">Tillu Square</h1>
            <p className="details">Genre: Comedy, Crime, Drama</p>
            <p className="details">Telugu</p>
            <p className="details">
              Follow Tillu as his life is upended by a mysterious murder, plunging him into a perilous journey of discovery and danger.
            </p>
            </div>
          </div>
        </div>
        <div>
          <div className="SliderContainer">
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
                        Malayalam,Telugu
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
                <h1 className="MovieName">Manjummel Boys</h1>
                    <p className="details">Genre: Survival thriller film</p>
                    <p className="details">Malayalam,Telugu</p>
                    <p className="details">
                    Manjummel Boys is a 2024 Indian Malayalam-language survival thriller film directed by Chidambaram and produced by Parava Films. The movie is based on a true story of 11 boys who embark on a leisure trip which changed the course of their life.</p>
                </div>

          </div>
        </div>
        <div>
          <div className="SliderContainer">
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
                <div>
                <h1 className="MovieName">Jersey</h1>
                    <p className="details">Genre: Drama,Sport</p>
                    <p className="details">Telugu</p>
                    <p className="details">
                    A failed cricketer decides to revive his cricketing career in his late 30's despite everyone being skeptical of his ability to do so.
                    </p>
                </div>

          </div>
        </div>
        <div>
          <div className="SliderContainer">
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
                <h1 className="MovieName">Godzilla x Kong</h1>
                    <p className="details">Genre: Action,Sci-fi,Thiriller</p>
                    <p className="details">English</p>
                    <p className="details">
                    An all-new adventure that pits the almighty Kong and the fearsome Godzilla against a colossal undiscovered threat hidden within our world, challenging their very existence-and our own.
                    </p>
                </div>

          </div>
        </div>
        <div>
          <div className="SliderContainer">
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
                <div>
                <h1 className="MovieName">Aavesham</h1>
                    <p className="details">Genre: Gangstar Comedy</p>
                    <p className="details">Malayalam</p>
                    <p className="details">
                    Jithu Madhavan's 'Aavesham' immerses viewers into an epic male fantasy, unfolding in predominantly male spaces like hostels and bars, crafting a tale of camaraderie, vengeance, and unexpected alliances, resonating with the experiences of college boys.
                    </p>
                </div>

          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Streamslider;
