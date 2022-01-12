import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`The name you entered was: ${name}`);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          //debugger
          setCount(count + 1);
          console.log("🚀 ~ file: t1.tsx ~ line 13 ~ Counter ~ count", count);
        }}
      >
        Click me
      </button>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>Enter your name: {name}</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Counter;
