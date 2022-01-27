import "./book-form.scss";

const BookForm = () => {
  return (
    <section className="book-form">
      <form>
        <div className="input-group">
          <span>Where To</span>
          <input type="text" placeholder="search places" />
        </div>
        <div className="input-group">
          <span>Arrivals</span>
          <input type="date" />
        </div>
        <div className="input-group">
          <span>Leaving</span>
          <input type="date" />
        </div>
        <div className="input-group">
          <input type="submit" value="Book Now" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default BookForm;
