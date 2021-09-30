import React from "react";
import bannerImg from "../../assets/bannerImg.jpg"
import bannerImg2 from "../../assets/bannerImg2.jpg"
import bannerImg3 from "../../assets/bannerImg3.jpg"

export default function ButtonAppBarCollapse() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={bannerImg} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={bannerImg2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={bannerImg3} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
