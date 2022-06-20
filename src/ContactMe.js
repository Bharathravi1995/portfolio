import SocialProfiles from "./SocialProfiles.js";
import { Element } from "react-scroll";
const ContactMe = () => {
  return (
    <section className="section" id="contactme" name="contactme">
      <div className="container">
        <h3 className="title">Contact Me</h3>
      </div>

      <div className="contact-info-container">
        <div>You can reach me via email or phone</div>
        <div>I would love to hear from you!</div>
        <a className="contact-info" href="mailto:bharathwaj.ravi1995@gmail.com">
          <i class="fa fa-solid fa-envelope fa-lg"></i>{" "}
          <div>bharathwaj.ravi1995@gmail.com</div>
        </a>
        <a className="contact-info" href="tel:+49176-2698-1268">
          <i class="fa fa-solid fa-phone fa-lg"></i>{" "}
          <div>+49 176-2698-1268</div>
        </a>
        <SocialProfiles />
      </div>
    </section>
  );
};

export default ContactMe;
