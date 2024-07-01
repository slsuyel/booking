import { SetStateAction, useState } from 'react';

import Slider from 'react-slick';
import './TimeCardScroll.css';
import { useTravelData } from '../../../hooks/useTravelData';
const TimeCardScroll = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const travelData = useTravelData();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    // cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    beforeChange: (next: SetStateAction<number>) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const activeData = travelData[activeSlide];

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className=" row mx-auto bg_time_card position-relative container"
      style={{ backgroundImage: `url(${activeData.image})` }}
    >
      <div className="overlay"></div>
      <div className="col-md-6">
        <div className="_timecard_content">
          <h6>{activeData.place}</h6>
          <h2>
            {activeData.title} <br /> {activeData.title2}
          </h2>
          <p>{activeData.description}</p>
          <button>DISCOVER LOCATION</button>
        </div>
      </div>{' '}
      {/*  */}
      <div className="col-md-6">
        <Slider {...settings} className="ccccc_slide">
          {travelData.map((d, index) => (
            <div key={index} className="slide_card pt-5">
              <img src={d.image} alt="" className="slide_card_img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TimeCardScroll;
