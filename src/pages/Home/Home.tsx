import SearchTab from './SearchTab';

const Home = () => {
  return (
    <div className="container row mx-auto my-5 position-relative">
      <SearchTab />
      <div className="col-md-5 p-0">
        <img
          className="banner_img_p"
          src="https://us.canvasartrocks.com/cdn/shop/products/Travel_the_world_monument_Wall_Mural_Wallpaper_a_1400x.jpg?v\u003d1571715164"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
