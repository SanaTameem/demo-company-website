import Image from "next/image";
import img1 from "../../../public/img (1).jpg";
import img2 from "../../../public/img (2).jpg";
import img3 from "../../../public/img (3).jpg";
import "./banner.css";

function Banner() {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner rounded-5">
          <div className="carousel-item active">
            <Image
              className="d-block w-100 banner-img"
              src={img1}
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First Slide</h5>
              <p>Description for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              className="d-block w-100 banner-img"
              src={img2}
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second Slide</h5>
              <p>Description for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <Image
              className="d-block w-100 banner-img"
              src={img3}
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third Slide</h5>
              <p>Description for the third slide.</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Banner;
