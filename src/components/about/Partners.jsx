import React from "react";
import Image from "next/image";
import img1 from "./../../../public/partner 1.jpg";
import img2 from "./../../../public/partner2.jpg";
import img3 from "./../../../public/partner3.jpg";
import img4 from "./../../../public/partner4.jpg";

function Partners() {
  return (
    <div className="container my-5" id="our_partners">
      <h2 className="text-primary text-center">Our Partners</h2>
      <p className="w-75 m-auto">
        At Elite Barry, we believe in the power of collaboration. We work with a
        range of strategic partners to enhance our service offerings and ensure
        our clients receive the best technology solutions available. Our
        partnerships extend across various sectors, enabling us to tackle
        challenges and seize opportunities effectively.
      </p>
      <div className="partners-logo row text-center my-4">
        <div className="partner-img-container col-6 col-md-3 mb-4">
          <Image
            width={150}
            height={150}
            src={img1}
            alt="partner-img"
            className="rounded-circle"
          />
        </div>
        <div className="partner-img-container col-6 col-md-3 mb-4">
          <Image
            width={150}
            height={150}
            src={img2}
            alt="partner-img"
            className="rounded-circle"
          />
        </div>
        <div className="partner-img-container col-6 col-md-3 mb-4">
          <Image
            width={150}
            height={150}
            src={img3}
            alt="partner-img"
            className="rounded-circle"
          />
        </div>
        <div className="partner-img-container col-6 col-md-3 mb-4">
          <Image
            width={150}
            height={150}
            src={img4}
            alt="partner-img"
            className="rounded-circle"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
