import React from "react";
import "./AboutMe.css";
import Card from "../../Components/Card";
import "../../../src/index.css";

export default function AboutMe() {
  return (
    <div className="contain">
      <div className="aboutme">
        <h1>About Me</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className=" box col-lg-4">
            <Card
              title="Education"
              body=<ul>
                <li>
                  {" "}
                  3500+ Hours Web development Training - The Last Mile 2018-2020
                </li>

                <li>
                  {" "}
                  High School Diploma - Salina Central High School- Spring 2010
                </li>

                <li>
                  {" "}
                  ACT WorkKeys National Career Readiness certificate - Silver
                  Level
                </li>
              </ul>
            />
          </div>

          <div className="box col-lg-4">
            <Card
              title="Experience"
              body=<ul>
                <li> MicroSoft Office Specialist(MOS) TA - Greenbush </li>
                <li> The Last Mile Coding Program </li>
                <li> The Last Mile TA - State Of Kansas </li>
              </ul>
            />
          </div>

          <div className="box  col-lg-4">
            <Card
              title="Work Skills "
              body="Highly trainable, solutions orientated, able to quickly adapt and fluctuate within different programs being used, 
                              self-motivated learner, naturally curious, thrives in a team setting, strong commmunication and collaboration
                              skills, interested in finding technical solutions when solving and storing high speed information, fosters positive work
                              enviroment, competent in leadership and management positions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
