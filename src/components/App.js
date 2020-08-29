import React from "react";

import Canvas from "./Canvas";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">Hello {name}</h1>
        <Canvas />
      </>
    );
  }
}

export default App;
