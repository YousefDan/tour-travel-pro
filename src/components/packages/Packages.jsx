import { packagesData } from "../../data";
import Heading from "../heading/Heading";
import PackageItem from "./PackageItem";
import "./packages.scss"

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <Heading title="Our Packages" />
      <div className="packages-container">
        {packagesData.map((item) => (
          <PackageItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Packages;
