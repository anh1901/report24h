import React, { useState } from "react";
import FontAwesome from "../uiStyle/FontAwesome";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import moment from "moment";

const TrendingNewsSlider = (props) => {
  const [swiper, setSwiper] = useState(null);
  const { data } = props;

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesToScroll: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1880: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };
  return (
    <div className="carousel_post2_type3 nav_style1">
      <Swiper
        getSwiper={setSwiper}
        className="trancarousel"
        {...params}
        observeParents
        observer
      >
        {data.map((item, i) => (
          <div key={i} className="single_post post_type3">
            <div className="post_img">
              <div className="img_wrap">
                <img
                  src={
                    item.image.includes("http")
                      ? item.image
                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAQlBMVEX///+hoaGenp6ampr39/fHx8fOzs7j4+P8/Pyvr6/d3d3FxcX29va6urqYmJjs7OzU1NSlpaW1tbWtra3n5+e/v78TS0zBAAACkUlEQVR4nO3b63KCMBCGYUwUUVEO6v3fagWVY4LYZMbZnff51xaZ5jON7CZNEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQb5tvI8qzX4/nH84XG5Upfj2ir2V2E5fZ/XpIX9saMnhkYLIkiyRJjdgMoiEDMmiQgfwM8rSu77ew2wnPoLTmwdZBs0J2BuXrYckcQm4nOoP+WcmWAbcTnUHZPy9eA24nOoN7n0HI54ToDM5k8PjluwyqgNuJzqDoaugPg8gWZ4noDAYLwuIg75fLeeHHsjNIzrZJwWwW+0DNsmEWPjiEZ5AcD8ZUu8VZ8HyQMifvBdIz+PS33i8adu+7Qn4Gn1Tdupl7rlCfQb9seosK7RkcBy1o30iVZ5CPOtDW3WhQnsF13IV3v0p3BqfJRoSpXVepzmA/24+yqeMyzRm4tqOs44lSUwa3yfgOri25av5CPRnklR33VlPnrqSZV09qMsiqSWV082xOz1uPajJ49pTM/f115k6guWa6JGjJ4N1lt8fXN2rv/vysjFaSQdFXBc/KKF04ptFPliclGVR9Bu27XCyeVOkmy5OODAZN9rYyyip/AIPJ8qIig+PoXbf7YdPdncFoSdCQQT4ZceV+MhiFMBy0hgyu0yGvOLI17KwpyGBaHK5jtt0N5GcwLw7XZdB31sRn8O+ziqYro8Vn4CwOV+k6a9Iz+PwRsKC7h+gMfMXhKu/OmuwM/MXhKq8yWnYG/uJw5Uxoy2jRGZTBZ/jboxuSM1guDtdNhKazJjiDbNMe0AxzKUVnkO+jEJxBxNtJzWCTxlNLzSB8KehJ/H+mJGYAjaDjzj9SnHZRuXZiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECXP1XDHv7U4SNFAAAAAElFTkSuQmCC"
                  }
                  alt="thumb"
                  width={350}
                  height={200}
                />
              </div>
              <span className="tranding">
                <FontAwesome name="eye" /> {item.viewCount}
              </span>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                <Link
                  to={{
                    pathname: "/search",
                    state: {
                      title: "Danh mục: " + item.category.subCategory,
                      CategoryID: item.category.categoryId,
                    },
                  }}
                >
                  {item.category.subCategory}
                </Link>
                <Link to={`/post-detail/${item.postId}`}>
                  {moment(item.publicTime).format("DD.MM.YYYY")}
                </Link>
              </div>
              <h4>
                <Link to={`/post-detail/${item.postId}`}>
                  {item.title.substring(0, 70) + "..."}
                </Link>
              </h4>
              <div className="space-10" />
              <p className="post-p">{item.subTitle.substring(0, 90) + "..."}</p>
            </div>
          </div>
        ))}
      </Swiper>
      <div className="navBtns">
        <div onClick={goPrev} className="navBtn prevtBtn">
          <FontAwesome name="angle-left" />
        </div>
        <div onClick={goNext} className="navBtn nextBtn">
          <FontAwesome name="angle-right" />
        </div>
      </div>
    </div>
  );
};

export default TrendingNewsSlider;
