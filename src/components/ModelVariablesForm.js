import { useForm } from "react-hook-form";
import axios from "axios";
import BootstrapModal from "./BootstrapModal";
import variables from "../assets/variables";
import variablesNames from "../assets/variablesNames";
import variablesInstructions from "../assets/variablesInstructions";
import variables1 from "../assets/variables1";
import variablesNames1 from "../assets/variablesNames1";
import variablesInstructions1 from "../assets/variablesInstructions1";

export const ModelVariablesForm = ({
  modalShow,
  setModalShow,
  result,
  setResult,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async function (data) {
    console.log(data);

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "https://gc813kqcu6.execute-api.eu-central-1.amazonaws.com/prod",
        data: data,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data.body);
      setModalShow(true);
      setResult(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container w-100">
      <div className="register-form row">
        <form onSubmit={handleSubmit(onSubmit)}>
          {variables1.map((variable, index) => (
            <div className="form-group" key={index}>
              <div>
                <label>{`${variablesNames1[index]}  `}</label>
              </div>
              <input
                defaultValue={`${variablesInstructions1[index]}`}
                {...register(`${variables1[index]}`)}
              />
            </div>
          ))}

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Solicitar evaluación
            </button>
            {
              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-warning float-right"
              >
                Reiniciar
              </button>
            }
            <BootstrapModal
              modalShow={modalShow}
              setModalShow={setModalShow}
              result={result}
              setResult={setResult}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
