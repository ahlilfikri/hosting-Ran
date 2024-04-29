const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <i
      {...props}
      className={
        "fa-solid fa-chevron-left prev-slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
      style={{position: "absolute", top: "50%", left: "-1.5%", transform: "translate(0,-50%)", zIndex: "100", color: "#105A97", fontSize: "2rem"}}
    ></i>
  );
  
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <i
      {...props}
      className={
        "fa-solid fa-chevron-right next-slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
      style={{position: "absolute", top: "50%", right: "-2%", transform: "translate(0,-50%)", color: "#105A97", fontSize: "2rem"}}
    ></i>
  );
  
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SlickArrowRight />,
      prevArrow: <SlickArrowLeft />,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              },
          },
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
              },
          },
      ],
  };
  
  export default settings;