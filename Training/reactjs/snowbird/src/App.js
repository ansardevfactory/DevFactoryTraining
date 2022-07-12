import React from "react";
import downarrow from "./images/downarrow.png";
import logo from "./images/snowlogo.png";
import menu from "./images/menu.png";
import "./style.css";
import search from "./images/search.png";
import cross from "./images/cross.png";
import add from "./images/add.png";
export default function App() {
  return (
    <>
      <div className="main">
        <div className="main_menunbar">
          <img src={logo} />
          <div className="main_menunbar_menu">
            <ul>
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>{" "}
              <li>
                <label>Board</label>
                <div>
                  <img src={downarrow} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="main_contentbar">
            <button className="fab_button">+</button>
          <div className="main_contentbar_headerbar">
            <div className="main_contentbar_headerbar_left">
              <div>
                <img src={menu} />
              </div>
              <label>Project</label>
            </div>
            <div className="main_contentbar_headerbar_right">
              <div className="circle">
                <label>AB</label>
              </div>
            </div>
          </div>
          <div className="main_contentbar_search">
            <div className="main_contentbar_search_left">
              <img src={search} />
              <input placeholder="Search by order #, name or email..." />
            </div>
            <div className="main_contentbar_search_right">
              <button>
                Filters <img src={downarrow} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_filters">
            <div className="main_contentbar_filters_inner">
              <button>
                Filters{" "}
                <img
                  className="main_contentbar_filters_inner_img"
                  src={cross}
                />
              </button>
            </div>
            <div className="main_contentbar_filters_inner">
              <button>
                <img className="main_contentbar_filters_inner_add" src={add} />
              </button>
            </div>
          </div>
          <div className="main_contentbar_list">
            <table>
              <tr>
                <th></th>
                <th>Head1</th>
                <th>Date</th>
                <th>New Head</th>
                <th>Head</th>
                <th>Last Head</th>
              </tr>
              <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr> <tr>
                <td>
                  <input type={"checkbox"} />
                </td>
                <td>
                  <label>#1006</label>
                </td>
                <td>
                  <label>20 Sep, 23:11</label>
                </td>
                <td>
                  <label>Paid</label>
                </td>
                <td>
                  <label>Make Lemonade</label>
                </td>
                <td>
                  {" "}
                  <label>Splashify 2.0</label>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
