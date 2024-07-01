import { useEffect, useRef } from 'react';
import './HeroAnimationSlider.css';

const HeroAnimationSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  const handleNextClick = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll('.item');
    slider.append(items[0]);
  };

  const handlePrevClick = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.querySelectorAll('.item');
    slider.prepend(items[items.length - 1]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Data array containing all items
  const data = [
    {
      name: 'Grand Canyon National Park',
      description:
        "Explore the vast and awe-inspiring landscapes of one of the world's most famous natural wonders. Hike along the canyon rim or venture into the depths for breathtaking views.",
      imageURL:
        'https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg',
    },
    {
      name: 'New York City',
      description:
        'Experience the bustling metropolis that never sleeps. Visit iconic landmarks like Times Square, Central Park, and the Statue of Liberty, and indulge in world-class dining and entertainment.',
      imageURL:
        'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/7010d1e88b80578f3d4e6fc09c2a2379.jpeg?h=84c61102&itok=7s_epXAP',
    },
    {
      name: 'Yellowstone National Park',
      description:
        "Discover the geothermal wonders and wildlife-rich landscapes of America's first national park. Witness Old Faithful erupt and explore the park's vast network of trails.",
      imageURL:
        'https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2016-10/Yellowstone.jpg?h=2a29b199&itok=OpHn5jav',
    },
    {
      name: 'Honolulu, Hawaii',
      description:
        'Escape to the tropical paradise of Honolulu, where palm-fringed beaches meet vibrant city life. Relax on Waikiki Beach, hike up Diamond Head, or explore historic Pearl Harbor.',
      imageURL:
        'https://santorinidave.com/wp-content/uploads/2023/03/beach-honolulu-oahu-where-to-stay.jpeg',
    },
    {
      name: 'Las Vegas, Nevada',
      description:
        'Experience the dazzling lights and entertainment of Las Vegas, known for its casinos, world-class shows, and vibrant nightlife. Explore the Strip and indulge in gourmet dining and shopping.',
      imageURL:
        'https://www.nationsonline.org/gallery/USA/Las-Vegas-Mandalay-Bay.jpg',
    },
  ];

  return (
    <main className="hr_body rounded mb-5">
      <div className="hr_main">
        <ul className="slider" ref={sliderRef}>
          {data.map((item, index) => (
            <li
              key={index}
              className="item "
              style={{ backgroundImage: `url("${item.imageURL}")` }}
            >
              <div className="content">
                <h2 className="title">{item.name}</h2>
                <p className="description">{item.description}</p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>

        <nav className="hr_ani_nav">
          <i
            onClick={handlePrevClick}
            className="fa-solid pre fs-1 fa-circle-chevron-left"
          ></i>
          <i
            onClick={handleNextClick}
            className="fa-solid nxt fs-1 fa-circle-chevron-right"
          ></i>
        </nav>
      </div>
    </main>
  );
};

export default HeroAnimationSlider;
