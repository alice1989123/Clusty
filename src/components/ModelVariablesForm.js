import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import BootstrapModal from "./BootstrapModal";

export const ModelVariablesForm = ({ modalShow, setModalShow }) => {
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
      console.log(response.data);
      setModalShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="my-4 font-weight-bold text-primary .display-4 ">
          Formato de evaluación del usuario
        </h1>
        <div className="form-group">
          <div>
            <label>Saldo financiero</label>
          </div>
          <input defaultValue="" {...register("v1")} />
        </div>
        <div className="form-group">
          <div>
            <label>Saldo financiero</label>
          </div>
          <input {...register("v2", { required: true })} />
        </div>
        <div className="form-group">
          <div>
            <label>Saldo financiero</label>
          </div>
          <input defaultValue="" {...register("v3")} />
        </div>

        {
          <div className="form-group">
            <div>
              <label>Género</label>
            </div>
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>
        }
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
          <BootstrapModal modalShow={modalShow} setModalShow={setModalShow} />
        </div>
      </form>
    </div>
  );
};
