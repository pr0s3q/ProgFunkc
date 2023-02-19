function MyForEach() {
  const mytab = [1, 2, 5, 9, 7];

  const mytabCallback = (number) => {
    //console.log(number);
    if (number % 2 == 0) console.log("Parzysta");
    else console.log("Nieparzysta");
  };

  mytab.forEach(mytabCallback);

  return (
    <div className="MyForEach">
      <h1>MyForEach Component</h1>
      {mytab.map((number, index) => {
        return (
          <div key={index}>
            <h3 key={index}>{number}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default MyForEach;
