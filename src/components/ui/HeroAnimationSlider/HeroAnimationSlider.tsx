import { useRef } from 'react';
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
  return (
    <main className="hr_body rounded">
      <div className="hr_main">
        <ul className="slider" ref={sliderRef}>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Lossless Youths"</h2>
              <p className="description">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage: 'url("https://i.redd.it/tc0aqpv92pn21.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Estrange Bond"</h2>
              <p className="description">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://wharferj.files.wordpress.com/2015/11/bio_north.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"The Gate Keeper"</h2>
              <p className="description">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://images7.alphacoders.com/878/878663.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Last Trace Of Us"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"Urban Decay"</h2>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                'url("https://da.se/app/uploads/2015/09/simon-december1994.jpg")',
            }}
          >
            <div className="content">
              <h2 className="title">"The Migration"</h2>
              <p className="description">
                {' '}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
              <button>Read More</button>
            </div>
          </li>
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
