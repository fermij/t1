import React from "react";

interface TodoProps {
  author: {
    name: string;
    job: string;
    startYear: number;
    todo: { id: number; text: string; done: boolean; }[]
  };
}

interface TodoState {
  brand: string;
  model: string;
  color: string;
  year: number;
}

class TodoContainer extends React.Component<TodoProps, TodoState> {
  constructor(props: any) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

//   static getDerivedStateFromProps(props: any, state: any) {
//     return {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1965,
//     };
//   }

  changeColor = (newColor: string, e: any) => {
    this.setState({ color: newColor });
    alert(e.type)   // is click
  };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ color: "yellow" });
//     }, 1000);
//   }

  render() {
    return (
      <div>
        <p>I am {this.props.author.name}</p>
        <ul>
          {this.props.author.todo.map((t, index) => (
            <li key={index}>
              {t.id}: {t.text} is {t.done ? "done" : "not finished"}
            </li>
          ))}
        </ul>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={(e) => this.changeColor("Green", e)}
        >
          Change color
        </button>
      </div>
    );
  }
}

export default TodoContainer;
