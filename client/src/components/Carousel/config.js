
function SampleNextArrow({ className, style, onClick }) {
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow({ className, style, onClick }) {
return (
    <div
    className={className}
    style={{ ...style, display: "block", background: "black" }}
    onClick={onClick}
    />
);
}

const settings = {
    className: "center",
    infinite: true,
    centerPadding: "105px",
    slidesToShow: 5,
    swipeToSlide: true,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 584,
            settings: {
              slidesToShow: 1,
              rows: 1,
              centerPadding: "50px",
              centerMode: true,
              infinite: true,
            }
        },
        {
            breakpoint: 654,
            settings: {
              slidesToShow: 1,
              rows: 1,
              centerPadding: "75px",
              centerMode: true,
              infinite: true,
            }
        },
        {
            breakpoint: 684,
            settings: {
              slidesToShow: 1,
              rows: 1,
              centerPadding: "155px",
              centerMode: true,
              infinite: true,
            }
        },
        {
          breakpoint: 784,
          settings: {
            slidesToShow: 2,
            rows: 1,
            centerPadding: "50px",
            centerMode: true,
            infinite: true,
          }
        },
        {
            breakpoint: 854,
            settings: {
              slidesToShow: 2,
              rows: 1,
              centerPadding: "65px",
              centerMode: true,
              infinite: true,
            }
        },
        {
            breakpoint: 954,
            settings: {
              slidesToShow: 3,
              rows: 2,
              centerPadding: "40px",
              centerMode: true,
              infinite: true,
            }
        },
        {
            breakpoint: 1154,
            settings: {
              slidesToShow: 3,
              rows: 2,
              centerPadding: "60px",
              centerMode: true,
              infinite: true,
            }
        },
        {
            breakpoint: 1254,
            settings: {
              slidesToShow: 3,
              rows: 2,
              centerPadding: "100px",
              centerMode: true,
              infinite: true,
            }
        },
        {
            breakpoint: 1354,
            settings: {
                slidesToShow: 4,
                rows: 2,
                centerPadding: "50px",
                centerMode: true,
                infinite: true,
            }
        },
        {
            breakpoint: 1450,
            settings: {
                rows: 2,
                slidesToShow: 4,
                centerPadding: "70px",
                centerMode: true,
                infinite: true,
            }
        }
    ]    
  };

  export default settings