import "./App.css";
import logo from "./assets/logo-hack.png";
import { ModelVariablesForm } from "./components/ModelVariablesForm";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <ModelVariablesForm />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
