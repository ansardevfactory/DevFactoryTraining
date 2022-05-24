import { useState } from "react";

export default function NewSample() {
  const [val, setValue] = useState("one");
  const setValueChange = (e) => {
    setValue(e.target.value);
  };
  const handleclick = () => {};
  return (
    <div>
      {val}
      <select  value={val} onChange={(e) => setValueChange(e)}>
        <option value={"select"}>select</option>
        <option value={"one"}>one</option>
        <option value={"two"}>Two</option>
      </select>
    </div>
  );
}
