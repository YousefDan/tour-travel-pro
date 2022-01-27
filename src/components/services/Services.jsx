import { servicesData } from "../../data";
import Heading from "../heading/Heading";
import "./services.scss";

const Services = () => {
  return (
    <section className="services" id="services">
      <Heading title="Our Services" />
      <div className="services-container">
        {servicesData.map((item) => (
          <div key={item.id} className="service-item">
            <div>
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <span>{item.id}</span>
            </div>
            <h6>{item.title}</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing lorem is the
              best.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
