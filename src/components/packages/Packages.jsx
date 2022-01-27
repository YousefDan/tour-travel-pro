import { packagesData } from "../../data";
import Heading from "../heading/Heading";
import "./packages.scss"

const Packages = () => {
  return (
    <section className="packages">
      <Heading title="Our Packages" />
      <div className="packages-container">
        {packagesData.map((item) => (
          <div key={item.id} className="package-item">
            <div className="img-wrapper">
              <img src={item.img} alt="" />
              <div className="destination">
                <i className="fas fa-map-marker-alt"></i>
                {item.destination}
              </div>
            </div>
            <div className="info-wrapper">
              <div className="price">
                {item.priceWithDiscount}
                <span>{item.price}</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                nam!
              </p>
              <div className="btn">Book Now</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
