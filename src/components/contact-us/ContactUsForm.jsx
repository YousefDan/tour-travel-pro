import Heading from "../heading/Heading";
import "./contact.scss";

const ContactUs = () => {
  return (
    <section className="contact-us" id="contact">
      <Heading title="Contact Us" />
      <form>
        <div className="inputs-wrapper">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="number" />
          <input type="text" placeholder="subject" />
        </div>
        <textarea cols="30" placeholder="your message" rows="10"></textarea>
        <div className="send-msg">
          <button className="btn">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
