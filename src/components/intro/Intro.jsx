import "./intro.scss";

const Intro = () => {
  return (
    <section className="intro" id="home">
      <div className="img-intro">
        <img src="/images/home-img.svg" alt="" />
      </div>
      <div className="content-intro">
        <h1>Adventure Is Worthwhile</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          delectus nesciunt id necessitatibus veniam ipsum, obcaecati blanditiis
          libero sapiente aspernatur.
        </p>
        <div className="btn">Explore Now</div>
      </div>
    </section>
  );
};

export default Intro;
