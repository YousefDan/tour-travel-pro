import "./heading.scss";

const Heading = ({ title }) => {
  const [first, second] = title.split(" ");
  return (
    <div className="heading">
      {first} <span>{second}</span>
    </div>
  );
};

export default Heading;
