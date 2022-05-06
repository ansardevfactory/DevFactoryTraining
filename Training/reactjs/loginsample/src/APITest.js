import axios from "axios";

function APITest() {
  function handleClick() {
    const url = "http://localhost:8000/addition";
    axios.post(url).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Test</button>
    </div>
  );
}
export default APITest;
