const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
<i
    {...props}
    className={
    "prev-slick-arrow" +
    (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
    style={{display: 'none'}}
></i>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
<i
    {...props}
    className={
    "next-slick-arrow" +
    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
    style={{display: 'none'}}
></i>
);
const settings = {
    dots: true,
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