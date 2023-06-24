
import './signuo.css'

import React, { useContext } from "react";
import "./signuo.css";
// import "./Mains.js";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import toast, { Toaster } from "react-hot-toast";
import { color } from "@mui/system";

const notify = () =>
  toast("Boa! Você está logado!", {
    icon: "👏",
    duration: 3000,
  });

function RegForm() {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();

  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(
    ({ email, password }) => context.signIn({ email, password }),
    {
      onSuccess: () => {
        notify();
        setTimeout(() => {
          navigate("/feed/discovery");
        }, 3000);
      },
    }
  );

  const onSubmit = async (data) => {
    console.log(data);
    await mutateAsync(data).catch((res) => {
      if (res.response.status === 401) {
        toast.error("Email ou senha incorretos");
      } else if (res.response.status === 500) {
        toast.error("Erro interno do servidor");
      }
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password, setPassword] = useState("");

  const { data, mutate } = useMutation((userData) => api.createUser(userData));

  return (
    <div className="bcL1">
      <div className="bcg2"></div>
      {isLoading && <Loading />}

      <div className="containerForm1">
        <form className="formContent1" onSubmit={handleSubmit(onSubmit)}>
          <label></label>
          <input
            className="texti1"
            type="text"
            placeholder="Primeiro Nome"
            required
            {...register("Fname")}
          />
          <input
            className="texti1"
            type="text"
            placeholder="Ultimo Nome"
            required
            {...register("Lname")}
          />
          <input
            className="texti1"
            type="text"
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            className="texti1"
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />

          <div className="divCheck">
            <input type="checkbox" />
            <span className="">Remember Password</span>
          </div>
          <button className="env2" type="submit">
            Sign Up
          </button>
          <span>Voltar</span>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default RegForm;
