import React from "react";
import Todolist from "./components/Todolist";
import image1 from "./Images/image1.jpg"

function App() {
  return (
    <div className="-mt-3 z-10 object-contain md:object-scale-down bg-center" 
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        height: "100vh"
      
      }}
    >
      <Todolist/>
    </div>
    
  );
}

export default App;
