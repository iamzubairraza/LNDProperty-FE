import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Feature(props) {
  const data = [
    {
      image: "/images/deposit.svg",
      text: "DEPOSIT",
      description: `See how the numbers stack up based on a 5%, 10% or 20% deposit.`,
    },
    {
      image: "/images/cash.svg",
      text: "CUSTOMISED AVAILABLE CASH",
      description: `Payable to the bank if you have less than a 20% deposit.
 We are proud to be one of the very few calculators that take this
into account!`,
    },
    {
      image: "/images/Group 2101.svg",
      text: "STAMP DUTY",
      description: `Its okay if you have exactly $186,347.
We'll allocate your cash accordingly.`,
    },
    {
      image: "/images/deposit.svg",
      text: "DEPOSIT",
      description: `See how the numbers stack up based on a 5%, 10% or 20% deposit.`,
    },
    {
      image: "/images/cash.svg",
      text: "CUSTOMISED AVAILABLE CASH",
      description: `Payable to the bank if you have less than a 20% deposit.
 We are proud to be one of the very few calculators that take this
into account!`,
    },
    {
      image: "/images/Group 2101.svg",
      text: "STAMP DUTY",
      description: `Its okay if you have exactly $186,347.
We'll allocate your cash accordingly.`,
    },
  ];
  // responseive config
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="feature">
        <h2 className="feature_heading">FEATURES</h2>
        <Carousel
          // swipeable={false}
          // draggable={false}
          // showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // draggable={false}
          transitionDuration={400}
          containerClass=""
          // customLeftArrow={<CustomLeftArrow />}
          // customRightArrow={<CustomRightArrow />}
          //   customDot={<CustomDot />}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop,"]}
          deviceType={props.deviceType}
          // renderDotsOutside={true}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          {data.map((el) => {
            return (
              <div className="feature_card">
                <img class="wrap_img" alt="" src={el.image}></img>
                <div class="text">{el.text}</div>
                <div className="about_paraghap">
                  <div className="feature_description">{el.description}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Feature;
