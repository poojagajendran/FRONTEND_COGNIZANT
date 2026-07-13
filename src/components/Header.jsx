function Header(props) {
  return (
    <header
      style={{
        backgroundColor: "#0d6efd",
        color: "white",
        padding: "15px",
      }}
    >
      <h1>{props.siteName}</h1>

      <nav>
        <a href="#" style={linkStyle}>
          Home
        </a>

        <a href="#" style={linkStyle}>
          Courses
        </a>

        <a href="#" style={linkStyle}>
          Profile
        </a>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
};

export default Header;