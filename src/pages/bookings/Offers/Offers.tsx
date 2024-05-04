import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Offers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const data = [
    {
      title: "New offer 1",
      img: "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
      des: "Description 1",
    },
    {
      title: "New offer 2",
      img: "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
      des: "Description 2",
    },
    {
      title: "New offer 1",
      img: "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
      des: "Description 1",
    },
    {
      title: "New offer 2",
      img: "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
      des: "Description 2",
    },
    {
      title: "New offer 1",
      img: "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
      des: "Description 1",
    },
    {
      title: "New offer 2",
      img: "https://t3.ftcdn.net/jpg/05/07/79/68/360_F_507796863_XOctjfN6VIiHa79bFj7GCg92P9TpELIe.jpg",
      des: "Description 2",
    },
  ];

  return (
    <div className="offers-container">
      <h6 className="offers-heading">Exclusive Offers</h6>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <div
                className="card-slider"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-slider-image rounded border-0 "
                />
                <div
                  className={`card-body-slider ${
                    hoveredIndex === index ? "open" : ""
                  }`}
                >
                  <h5 className="card-slider-title">{item.title}</h5>
                  <p className="card-slider-text">{item.des}</p>
                  <Link to={""} className="card-slider-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offers;
