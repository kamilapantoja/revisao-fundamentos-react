import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpressions";
import "./App.css";
import ManageData from "./components/ManageData";
import ListaRender from "./components/ListaRender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="app">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <div class="professional">
        <TemplateExpression />
      </div>
      <div>
        <ManageData />
        <ListaRender />
      </div>
    </div>
  );
}

export default App;
