import { useEffect, useState } from "react";
import "./style/style.css";

function Dashboard() {
  var a = [
    { Id: "1", txtprdName: "sample", Rate: "100", Tax: "18" },
    { Id: "2", txtprdName: "sample2", Rate: "100", Tax: "18" },
    { Id: "3", txtprdName: "sample3", Rate: "100", Tax: "18" },
  ];
  
  
//   <tr>  <td>item.Id</td>  <td>item.txtprdName</td>  <td>item.Rate</td>  <td>item.Tax</td></tr>
  const [productlist, setProductList] = useState([
    { Id: "1", txtprdName: "sample", Rate: "100", Tax: "18" },
    { Id: "2", txtprdName: "sample2", Rate: "100", Tax: "18" },
    { Id: "3", txtprdName: "sample3", Rate: "100", Tax: "18" },
  ]);
  useEffect(() => {}, []);

  return (
    <div className="maindiv">
      <div className="headerpart"> 
        <label>User</label>
      </div>
      <div className="bodypart">
        <div className="menu">
          <nav>
            <li>Home</li>
            <li>Products</li>
            <li>Orders</li>
            <li>Logout</li>
          </nav>
        </div>
        <div className="content">
          <h1>Products</h1>
          {
              productlist.map((item,index)=>{
                  return <p>{index}{item.txtprdName}</p>
              })
          }
          <table>
            <thead>
              <th>Id</th>
              <th>ProductName</th>
              <th>Rate</th>
              <th>Tax</th>
            </thead>
            <tbody>
              {
                  productlist.map((prdct,pos)=>{
                      return <tr>  <td>{prdct.Id}</td>  <td>{prdct.txtprdName}</td>  <td>{prdct.Rate}</td>  <td>{prdct.Tax}</td></tr>
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
