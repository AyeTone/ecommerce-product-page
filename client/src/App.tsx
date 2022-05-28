import React, { useState } from "react";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar";
import Context from "./Context/Context";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState(0);

  return (
    <Context.Provider value={{ cart, setCart, showCart, setShowCart }}>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </Context.Provider>
  );
}

export default App;
