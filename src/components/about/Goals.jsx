import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faKey,
  faNewspaper,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

function Goals() {
  return (
    <section class=" bg-light my-5" id="goals_missions">
      <div class="container">
        <div class="row text-center my-5">
          <div class="col-md-8 offset-md-2">
            <h2>Our Goals & Missions</h2>
            <p class="lead">
              Our mission is to deliver tailored software
              solutions that empower businesses to navigate the complexities of
              the digital landscape.
            </p>
          </div>
        </div>
        <div class="row missions-container">
          <div class="col-md-4">
            <div class="card mb-4 p-3 rounded-0 border-0 bg-white">
              <div class="card-body text-center">
                <FontAwesomeIcon
                  icon={faAtom}
                  className="goal-icon fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 class="card-title">Empowerment through Technology</h5>
                <p class="card-text">
                  Our mission is to deliver tailored software solutions that
                  empower businesses to navigate the complexities of the digital
                  landscape.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 rounded-0 border-0 p-3 bg-white">
              <div class="card-body text-center">
                <FontAwesomeIcon
                  icon={faKey}
                  className="goal-icon fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 class="card-title">Trusted Partnerships</h5>
                <p class="card-text">
                  We aim to be a trusted partner, transforming challenges into
                  opportunities through innovative technology and strategic
                  guidance.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 rounded-0 border-0 p-3 bg-white">
              <div class="card-body text-center">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="goal-icon fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 class="card-title">Driving Efficiency</h5>
                <p class="card-text">
                  Our goal is to drive efficiency and productivity for our
                  clients, ensuring they can achieve their business aspirations.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 rounded-0 border-0 p-3 bg-white">
              <div class="card-body text-center">
                <FontAwesomeIcon
                  icon={faKey}
                  className="goal-icon fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 class="card-title">Commitment to Innovation</h5>
                <p class="card-text">
                  We are dedicated to continuous innovation, providing
                  cutting-edge solutions that adapt to the ever-evolving needs
                  of our clients.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 rounded-0 border-0 p-3 bg-white">
              <div class="card-body text-center">
                <FontAwesomeIcon
                  icon={faNewspaper}
                  className="goal-icon fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 class="card-title">Client-Centric Approach</h5>
                <p class="card-text">
                  Our mission is to prioritize client satisfaction, offering
                  customized services that align with their specific goals and
                  requirements.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 rounded-0 border-0 p-3 bg-white">
              <div class="card-body text-center">
                <FontAwesomeIcon
                  icon={faChartBar}
                  className="goal-icon fa-3x text-primary bg-light rounded-circle p-3 my-4"
                />
                <h5 class="card-title">Fostering Growth</h5>
                <p class="card-text">
                  We strive to foster growth for our clients by leveraging
                  technology to enhance their operational capabilities and
                  competitive edge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;
