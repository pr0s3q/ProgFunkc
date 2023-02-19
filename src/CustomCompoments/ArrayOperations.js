import { useEffect, useState } from "react";

function ArrayOperations() {
  const [myArray, setMyArray] = useState([1, 2, 3, 4, 3]);
  const [number, setNumber] = useState();

  const btnAdd_Click = () => {
    setMyArray((old) => [...old, number]);
  };

  useEffect(() => {
    setMyArray((old) => [...old, 99]);
  }, []);

  return (
    <>
      <div class="card border-light bg-transparent m-2">
        <div class="card-body">
          <h4 class="card-title">ArrayOperations</h4>
          <p class="card-text">
            {myArray.map((number, index) => {
              return <span key={index}>{number}, </span>;
            })}
          </p>
        </div>
      </div>
      <div class="card border-primary bg-transparent">
        <div class="card-body">
          <h4 class="card-title">Input value</h4>
          <input type="text" onInput={(e) => setNumber(e.target.value)} />
          <br />
          <button
            onClick={btnAdd_Click}
            type="button"
            className="btn btn-primary m-2"
          >
            Add value
          </button>
        </div>
      </div>
    </>
  );
}

export default ArrayOperations;
