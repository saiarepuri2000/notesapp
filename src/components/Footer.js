import React from "react";
import "./footer.css"
function Footer() {
  const year = new Date().getFullYear();
  return (
      <p className="footer">Copyright &copy; saivarma {year}</p>
    
  );
}

export default Footer;
