import Slider from 'react-slick';

const HorizontalScroll = () => {
  const data = [
    {
      image:
        'https://www.planetware.com/photos-large/USNY/usa-best-places-san-francisco.jpg',
      title: 'Priceline VIP Rewards™ Visa® Card',
      subtitle: 'Military & Veterans Travel Deal',
      description:
        'AmericanForcesTravel.com is the U.S. Department of Defense official online leisure travel site offering exclusive travel deals and benefits for the military, veterans and DOD civilians.',
      eligibility:
        'Eligibility: Active military, Guard or Reserve, U.S. Coast Guard, Retired Military, and all eligible MWR patrons. Entrants must be eligible for the Military Morale, Welfare, and Recreation (“MWR”) Program benefits as outlined in DoD Instruction 1015.10 and the COMDTINST M1710.13D.',
      buttonText: 'Book Now',
    },
    {
      image:
        'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/usa_freedom_stature_new_york-1183170.jpg',
      title: 'Explore New York City',
      subtitle: 'Discover the Freedom Statue',
      description:
        'Save up to 30% on shorter stays most nights when you travel from March 25 – October 3, 2024. Also, Discover A 4-Park Magic Ticket and 3-Park Ticket!',
      eligibility:
        'Eligibility: Open to all travelers interested in exploring iconic landmarks and cultural experiences in New York City.',
      buttonText: 'Plan Your Trip',
    },
    {
      image:
        'https://blog.thomascook.in/wp-content/uploads/2017/11/Untitled-design3-1.png',
      title: 'Discover Tropical Getaways',
      subtitle: 'Escape to Exotic Destinations',
      description:
        'Now earn a $200 Statement Credit after first purchase + 5K Bonus Points after qualifying purchases. Plus, earn 5X points on all Priceline bookings, 2X points on restaurant and gas purchases, and automatic VIP Gold Status! Terms apply.',
      eligibility:
        'Eligibility: Suitable for travelers seeking relaxation, adventure, and cultural experiences in tropical destinations worldwide.',
      buttonText: 'Explore Deals',
    },
    {
      image:
        'https://d1bv4heaa2n05k.cloudfront.net/user-images/1534949812425/shutterstock-125624981_destinationMain_1534949819472.jpeg',
      title: 'Adventures Await',
      subtitle: 'Embark on Your Next Journey',
      description:
        'Plan your next adventure and discover new destinations with exclusive travel packages tailored for every type of traveler.',
      eligibility:
        'Eligibility: Open to all adventurers looking to explore new horizons and create unforgettable memories.',
      buttonText: 'Start Exploring',
    },
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  return (
    <div className="container overflow-hidden">
      <Slider {...settings}>
        {data.map((item, index) => (
          <section key={index} className="hr_content_slick">
            <div className=" row mx-auto text-black">
              <div className="col-md-6 position-relative ">
                <div className="pt-5">
                  <p className="_vip">{item.title}</p>
                  <h2 className="">{item.subtitle}</h2>
                  <p className="_des">{item.description}</p>
                </div>
                <div>
                  <button className="btn btn-primary mb-2 my-2">
                    {item.buttonText}
                  </button>
                </div>
                <p className="_min_p">{item.eligibility}</p>
              </div>

              <div className="col-md-6 d-flex justify-content-end">
                <img
                  className="img-fluid rounded rounded-4"
                  src={item.image}
                  alt="Image"
                />
              </div>
            </div>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default HorizontalScroll;
