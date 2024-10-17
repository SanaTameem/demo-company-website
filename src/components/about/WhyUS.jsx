import Image from "next/image";
import img7 from './../../../public/img (7).jpg';

function WhyUS() {
  return (
    <section class="py-5 bg-light" id="why_us">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 d-flex flex-column justify-content-center">
            <h2>Why Us?</h2>
            <p>
              Choosing Elite Barry means partnering with a team that values
              integrity, innovation, and customer satisfaction. Our commitment
              to quality is unwavering, with a robust quality assurance process
              ensuring that every product we deliver meets the highest
              standards. We take pride in our adaptability and our ability to
              customize solutions that align perfectly with your business
              objectives.
            </p>
          </div>
          <div class="col-lg-6">
            <Image
              src={img7}
              alt="audience image"
              class="img-fluid rounded-5 mb-4"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUS;
