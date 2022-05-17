import { useState } from "react";
import "./style.css";

function DragAndDrop() {
  const [firstArray, setFirstArray] = useState(["One", "Two"]);
  const [secondArray, setSecondArray] = useState(["Three", "Four", "Five"]);
  const [thirdArray, setThirdArray] = useState(["Six"]);
  const [dragElement, setDragElement] = useState({});
  const allowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    var target = e.target.className;
    var startedDiv = dragElement.startedDiv;
    if (target != startedDiv) {
      if (startedDiv == "firstDiv") {
          
      }
      if (target == "firstDiv") {
        var temp = firstArray;
        temp.push(dragElement.item);
        setFirstArray(temp);
      } else if (target == "secondDiv") {
        var temp = secondArray;
        temp.push(dragElement.item);
        setSecondArray(temp);
      }
      if (target == "thirdDiv") {
        var temp = thirdArray;
        temp.push(dragElement.item);
        setThirdArray(temp);
      }
    }
  };
  const handleDrag = (e, index, startedDiv, item) => {
    // console.log(startedDiv);
    // console.log(index);
    setDragElement({ index: index, startedDiv: startedDiv, item: item });
  };

  return (
    <div className="drageAndDrop">
      <div
        className="firstDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {firstArray.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "firstDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="secondDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {secondArray.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "secondDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
      <div
        className="thirdDiv"
        onDragOver={(e) => allowDrop(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {thirdArray.map((item, index) => {
          return (
            <p
              draggable="true"
              onDragStart={(e) => handleDrag(e, index, "thirdDiv", item)}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default DragAndDrop;
