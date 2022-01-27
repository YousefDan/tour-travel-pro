const PackageItem = ({ item }) => {
  const { destination, img, price, priceWithDiscount } = item;
  return (
    <div className="package-item">
      <div className="img-wrapper">
        <img src={img} alt={destination} />
        <div className="destination">
          <i className="fas fa-map-marker-alt"></i>
          {destination}
        </div>
      </div>
      <div className="info-wrapper">
        <div className="price">
          {priceWithDiscount}
          <span>{price}</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nam!</p>
        <div className="btn">Book Now</div>
      </div>
    </div>
  );
};

export default PackageItem;
