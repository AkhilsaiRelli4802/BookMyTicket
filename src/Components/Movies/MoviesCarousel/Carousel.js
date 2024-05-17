import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://img.freepik.com/free-vector/planetarium-interior-with-huge-spherical-display_107791-16497.jpg?t=st=1713759957~exp=1713763557~hmac=50751ed27e14fd5532a0da1a9af7d3002ca8ecfa8df517c9529ffa8d444e8f1f&w=996',
    altText: 'Experience The Joy',
    caption: 'Experience The Emotions',
    key: 1,
  },
  {
    src: 'https://www.cinionic.com/wp-content/uploads/2019/10/Cinescape-Interior-website.jpg',
    altText: 'It is a Place Where you can try new Tastes',
    caption: 'It is a Place Where you can try new Tastes',
    key: 2,
  },
  {
    src: 'https://media.gettyimages.com/id/1234740484/photo/mumbai-maharashtra-india-people-stand-in-a-queue-inside-juhu-pvr-multiplex-with-their-covid.jpg?s=612x612&w=0&k=20&c=FUnpvowPR0VH41VCnqhh2rOEBqjfCuWezt3YOOzmmSs=',
    altText: 'Save Your Time by Booking your Tickets in Online',
    caption: 'Save Your Time by Booking your Tickets in Online',
    key: 3,
  },
];

function Example(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{height:"50vh",width:"90vw"}} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div style={{width:"90vw",height:"80px",margin:"30px",marginLeft:"40px"}}>
    <Carousel 
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>
  );
}

export default Example;