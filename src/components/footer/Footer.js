import { useContext } from "react";
import { Fade } from "react-awesome-reveal"; // <-- CHANGE import here
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>

      </div>
    </Fade>
  );
}
