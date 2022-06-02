import "./style.css";
import Menu from "./Menu.js";
import SingleBike from "./SingleBike";
import Header  from "./Header";
const App = () => {
  return (
    <>
    <Header />
      <div class="parallax">
        <div class="parallax__group">
          <div class="parallax__layer parallax__layer--back">
            <div class="row2">
              {" "}
              <img src={require("./images/banner.jpg")} />
              <div class="innercontent">
                <p class="mainhead">HeadOne</p>
                <p class="shorthead">HeadTwo</p>
              </div>
            </div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div className="about_row">
                <div className="about_row_col1">
                    <h2>About Us</h2>
                    <p>Blitz Motorcycles is a Paris-based custom garage founded by Fred Jourden   in 2010. In the workshop are conceived customized and hand finished motorcycles to create unique, one-of-a-kind machines. Our love of old timers is no secret, so every project we undertake honours a legend while telling it's own story.</p>
                </div>
                <div className="about_row_col2">
                    <h2>Photographers</h2>
                    <label>Valen Zhou</label><br />
                    <label>Valen Zhou</label><br />
                    <label>Valen Zhou</label>
                </div>
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
      </div>
    </>
  );
};
export default App;
