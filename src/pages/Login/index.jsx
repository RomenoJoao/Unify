import React, { useContext } from "react";
import "./Login.css";
// import "./Mains.js";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Boa! Você está logado!", {
    icon: "👏",
    duration: 3000,
  });

function LoginForm() {
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

  return (
    <>
      {isLoading && <Loading />}
      <div className="containerForm">
        <form className="formContent" onSubmit={handleSubmit(onSubmit)}>
          <label></label>
          <input
            type="text"
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />

          <div className="divCheck">
            <input type="checkbox" />
            <span>Remember Password</span>
          </div>
          <button type="submit">Sign in</button>
        </form>
      </div>
      <Toaster />
    </>
  );
}

export default LoginForm;
