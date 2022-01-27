import { pricingData } from "../../data";
import Heading from "../heading/Heading";
import "./pricing.scss";

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <Heading title="Our Pricing" />
      <div className="pricing-container">
        {pricingData.map((item) => (
          <div key={item.id} className="plan-item">
            <h5 className="plan">{item.plan}</h5>
            <div className="price">
              $<span>{item.price}</span>/Mo
            </div>
            <ul>
              <li>{item.days} Days</li>
              <li>Food And Drinks</li>
              <li>Safety Guide</li>
              <li>Insurance</li>
              <li>Luxury Hotel</li>
            </ul>
            <div className="btn-wrapper">
              <button className="btn">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
