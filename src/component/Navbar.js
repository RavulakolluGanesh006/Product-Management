import "./Navbar.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="title">
        <h1>myMart-App</h1>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/electronics">Electronics</a>
        <a href="/jewelery">Jewelery</a>
        <a href="/mens">Mens</a>
        <a href="/womens">Womens</a>
      </div>

      <div className="nextlinks">
        <a href="/profile">Profile</a>
        <a href="/cart">Cart</a>
        <a href="/">Login</a>
      </div>
    </div>
  );
}

export default Navbar;