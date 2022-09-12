import rec from "./Images/image1.png";
import "./style.css";

export default function InBetweenBanner2(){
    return(
        <>
          <div className="InBetweenBanner2" style={{backgroundImage: `url(${rec})`}}>
            <div className="InBetweenBanner2_label1">Get Latest Update By Subscribe</div>
            <div className="InBetweenBanner2_label2">Our Newslater</div>
            <div className="InBetweenBanner2_button">
                <button>Shop Now</button>
            </div>
             
          </div>
        </>
    );
}