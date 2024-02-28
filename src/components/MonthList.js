import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetch from "../useFetch";
import { API_URL } from "../constants";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MonthList = () => {
  const { data: months, isPending, error } = useFetch(API_URL);

  return (
    <div className="container py-5">
      <h3 className="mb-3">Months</h3>
      {months && (
        <Carousel
          draggable={false}
          swipeable={true}
          responsive={responsive}
          infinite={false}
          autoPlaySpeed={1000}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {months.map((month) => (
            <div className="px-2">
              <img
                src={require(`../img/${month.id}.jpg`)}
                alt=""
                style={{ width: "100%", height: "200px" }}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default MonthList;
