import Image from "next/image";
import React from "react";
import img8 from './../../../public/img (8).jpg';

function CompanyBackground() {
  return (
    <section className="about py-5 bg-light mt-5" id="company_background">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Image
              src={img8}
              alt="background image"
              className="img-fluid rounded-5 my-4"
              width={600}
              height={500}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className="mt-5">Company Background</h2>
            <p>
            Founded in 2021, Elite Barry has quickly established itself as a leader in software development and IT services in Afghanistan. We specialize in Management Information Systems (MIS), mobile applications, and website development, backed by a team of seasoned professionals. Our mission is to leverage technology to streamline bureaucratic processes, delivering reliable and innovative solutions tailored to our clients&apos; needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyBackground;
