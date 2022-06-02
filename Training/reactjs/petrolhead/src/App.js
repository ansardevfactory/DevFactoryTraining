import "./style.css";
import Menu from "./Menu.js"
const App = () => {
  return (
    <>
      <div class="row1">
        <div class="logo">
          <img alt="logo" src={require("./images/logo.jpg")} />
        </div>
        <Menu />
      </div>
      <div class="row2">
        <video autoplay="autoplay" loop="true" autoPlay muted>
          <source src={require("./images/video.mp4")} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <div class="innercontent">
          <p class="mainhead">HeadOne</p>
          <p class="shorthead">HeadTwo</p>
        </div>
      </div>
      <div class="row3">
        <div class="row3_col1">
          <img src={require("./images/left.jpg")} />
        </div>
        <div class="row3_col2">
          <div class="row3_col2_row1">
            {" "}
            <img src={require("./images/right.jpg")} />
          </div>
          <div class="row3_col2_row2">
            {" "}
            <img src={require("./images/right.jpg")} />
          </div>
        </div>
      </div>
      <div class="footerrow">
        <div class="fr_col1">
          <h4>About</h4>
          <ul>
            <li>
              Blitz Motorcycles is a Paris-based custom garage that conceives,
              customises and hand finishes motorcycles to create unique,
              one-of-a-kind machines.
            </li>
            <li>
              <p>Copyright © 2020 Blitz Motorcycles. All rights reserved.</p>
            </li>
          </ul>
        </div>
        <div class="fr_col2 col">
          <h4>Information</h4>
          <ul>
            <li>About Blitz</li>
            <li>Partners</li>
            <li>Press</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div class="fr_col3 col">
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
        <div class="fr_col4 col">
          <h4>Contact</h4>
          <ul>
            <li>contact@blitz-motorcycles.com</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;
