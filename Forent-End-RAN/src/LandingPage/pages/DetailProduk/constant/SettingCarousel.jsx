const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <i
      style={{display:'none'}}
    ></i>
  );
  
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <i
        style={{display:'none'}}
    ></i>
  );
  
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      nextArrow: <SlickArrowRight />,
      prevArrow: <SlickArrowLeft />
  };
  
  export default settings;