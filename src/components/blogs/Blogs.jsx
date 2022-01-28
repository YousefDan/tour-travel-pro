import Heading from "../heading/Heading";
import "./blogs.scss";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <Heading title="Our Blogs" />
      <div className="blogs-container">
        {[1, 2, 3].map((item) => (
          <div key={item} className="blog-item">
            <img src={`/images/blog-${item}.svg`} alt="" />
            <h5>Explore The World Now, Adventure Awaits</h5>
            <div className="btn">Read More</div>
            <div className="some-info">
              <div>
                <i className="fas fa-calendar"></i>
                1st Jan, 2021
              </div>
              <div>
                <i className="fas fa-user"></i>
                By Admin
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
