import React, { useState } from "react";

function MyForm() {
  const [inputs, setInputs] = useState({
    username: "",
    age: 0,
  });

  const handleChange = (e: any) => {
    const name = e.target.name
    const value = e.target.value;
    // const test = (values: any) => ({ ...values, [name]: value });
    // console.log("🚀 ~ file: t2.tsx ~ line 13 ~ handleChange ~ test", test(inputs))
    
    //* Method 1
    //setInputs((values: any) => ({ ...values, [name]: value }));

    //* Method 2
    // setInputs(previousState => {
    //   return { ...previousState, [name]: value }
    // })

    //* Method 3
    setInputs(previousState => ({ ...previousState, [name]: value }))
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert(inputs.username + " " + inputs.age)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default MyForm;
