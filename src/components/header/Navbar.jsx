const Navbar = ({ toggleMenu }) => {
  return (
    <nav style={{ transform: toggleMenu && "scale(1)" }} className="navbar">
      <a href="#home">Home</a>
      <a href="#packages">Packages</a>
      <a href="#services">Services</a>
      <a href="#pricing">Pricing</a>
      <a href="#review">Review</a>
      <a href="#contact">Contact</a>
      <a href="#blogs">Blogs</a>
    </nav>
  );
};

export default Navbar;
