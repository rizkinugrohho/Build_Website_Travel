import React from "react";
import TestimonyAccent from "assets/images/testimonial-landingpage-frame.jpg";

import Star from "elements/Star";
export default function Testimony() {
  return (
    <section className="container">
      <div className="row align-item-center">
        <div className="col-auto" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
            <img
              src={TestimonyAccent}
              alt="Testimonial frame"
              className="position-absolute"
              style={{ margin: `30px 0 0 30px`, zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col-6">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={35} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
        </div>
      </div>
    </section>
  );
}
