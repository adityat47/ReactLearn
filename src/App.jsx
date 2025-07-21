import { useState } from "react";
import "./App.css";
import  "./index.css";
import Header from "./Components/Header";
import Calculators from "./Components/Calculators";



function App() {
  return (
    <>
      <Header />
      <main style={{ marginTop: 56 }}>
        <h1>Welcome to the App</h1> 
        <Calculators/>
     
      </main>
      <footer style={{ padding: 16, textAlign: 'center', backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0,left:0, width: '100%' }}>
        <p>Footer Content</p>
      </footer>
    
    </>
  );
}

export default App;
