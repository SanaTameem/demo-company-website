import React from "react";
import "./about.css";
import Image from "next/image";
import profile from './../../../public/profile.jpg'

function Team() {
  const teamMembers = [
    { name: "Imran Khan Safi", title: "General Manager", photo: profile },
    { name: "Sadiq", title: "Developer", photo: profile },
    { name: "Shabir Ahmad Shoja", title: "Developer", photo: profile},
  ];
  return (
    <section class="mb-5 bg-light team" id="our_team">
      <div class="container ">
        <div class="row">
          <div class="col-12">
            <div class="team-bg rounded-5 py-6 text-center">
              <div class="team-bg-text text-white w-75 m-auto d-flex justify-content-center align-items-center flex-column">
                <h2 class="display-5 fw-bold">Our Team</h2>
                <p>
                  Our diverse team comprises skilled professionals with
                  extensive experience in software development, IT services, and
                  project management. Each member brings unique expertise,
                  ensuring a comprehensive approach to every project. Our
                  collaborative culture fosters innovation and creativity,
                  allowing us to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row my-5">
          {teamMembers.map((member) => (
            <div key={member.name} class="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <Image class="bd-placeholder-img rounded-circle" alt="member-photo" width={140} height={140} src={member.photo} />
              <h2 class="fw-normal">{member.name}</h2>
              <p>
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
