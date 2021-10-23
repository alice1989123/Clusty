import "./App.css";
import logo from "./assets/logo-hack.png";
import { ModelVariablesForm } from "./components/ModelVariablesForm";
import React, { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState("");

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <ModelVariablesForm
            modalShow={modalShow}
            setModalShow={setModalShow}
            result={result}
            setResult={setResult}
          />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
