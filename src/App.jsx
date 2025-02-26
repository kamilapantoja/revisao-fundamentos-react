import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpressions";
import "./App.css";
import ManageData from "./components/ManageData";
import ListaRender from "./components/ListaRender";
import CondicionalRender from "./components/CondicionalRender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <div className="professional">
        <TemplateExpression />
      </div>
      <div>
        <ManageData />
        <ListaRender />
        <CondicionalRender />
      </div>
    </div>
  );
}

export default App;
