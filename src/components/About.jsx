import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className=" shadow-sm py-4 about w-100 vh-50 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div className="row content justify-content-center align-items-center">
          <div className="row ">
            <div className="section-title">
              <h2 className="text-center" data-aos="fade-up">
                ABOUT KADSUBEB
              </h2>
            </div>
            <hr />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="fw-bolder text-md-start">Background:</h3>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              cumque accusantium architecto. world&apos;s Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Eius facilis repellat ducimus.
              amet consectetur adipisicing elit. Eius facilis repellat ducimus.
              amet consectetur adipisicing elit. Eius facilis repellat ducimus.
              amet consectetur adipisicing elit. Eius facilis repellat ducimus.
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <div class="text-center text-lg-start">
                <a
                  href="/about"
                  className="btn-about mb-4 d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  <span>Read more</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <img src="/images/sir.jpg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
