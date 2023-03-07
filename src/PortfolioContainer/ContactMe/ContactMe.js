import React from "react";
import "./ContactMe.css";
import Icon from "@mdi/react";
import emailjs from "emailjs-com";
import { mdiEmail } from "@mdi/js";
import { Card, CardContent, Grid, TextField } from "@material-ui/core";
import { inputFormElements } from "../../../src/formElements";

export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_859skld",
        "template_xr0s41p",
        e.target,
        "bpUScV3FqJ_PvJ_4X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className=" ContactMe">
      <Grid style={{ padding: "80px 5px 0 auto" }}>
        <Card
          style={{ maxWidth: 450, margin: "60px auto ", padding: "20px 5px" }}
        >
          <CardContent>
            <div className=" getintouch ">
              <h1 className="color_sec mt-3" id="HireMe">
                Get In Touch <Icon path={mdiEmail} size={2} />
              </h1>
              <div className="address">
                <strong>Email : brittney.betzold2020@gmail.com</strong>
                <br />
                <p>
                  <strong>Phone : 913-313-1430</strong>
                </p>
                <br />
              </div>
            </div>
            <form onSubmit={sendEmail}>
              <Grid container spacing={1}>
                {inputFormElements.map((input) => (
                  <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>
                ))}
                <Grid xs={12} sm={12} item>
                  <button type="submit" className="btn primary-btn">
                    SUBMIT
                    <Icon path={mdiEmail} size={1} />
                  </button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <img alt="Mail" className="contactpic" />
    </div>
  );
}
