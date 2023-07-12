import "./signuo.css";

import React from "react";

// import "./Mains.js";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import endpoints from "../../api/endpoints";
import Loading from "../../components/Loading";
import { UserSchema } from "../../utils/user";

const notify = () =>
  toast("Registo feito, agora faca login!", {
    icon: "👏",
    duration: 3000,
  });

function RegForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
  });

  const navigate = useNavigate();
  const { mutateAsync, isLoading } = useMutation(
    ({ email, password, name, username, lastname, password_confirmation }) => {
      endpoints.createUser({
        name,
        lastname,
        password_confirmation,
        login: {
          email,
          password,
          username,
        },
      });
    },
    {
      onSuccess: () => {
        notify();
        setTimeout(() => {
          navigate("/auth/login");
        }, 3000);
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  const onSubmit = async (data) => {
    console.log(data);
    await mutateAsync(data).catch((res) => {
      if (res.response.status === 401) {
        toast.error("Senha nao coincede");
      } else if (res.response.status === 500) {
        toast.error("Erro interno do servidor");
      }
    });
  };

  return (
    <div className="bcL1">
      <div className="bcg2"></div>
      {isLoading && <Loading />}

      <div className="containerForm1">
        <h2>Unify Client</h2>
        <h4>© Unify 2023, Todos direitos reservados</h4>
        <form className="formContent1" onSubmit={handleSubmit(onSubmit)}>
          <label></label>
          <input
            className="texti1"
            type="text"
            placeholder="Primeiro Nome"
            {...register("name")}
          />
          {errors.name && <p className="error-field">{errors.name.message}</p>}
          <input
            className="texti1"
            type="text"
            placeholder="Ultimo Nome"
            {...register("lastname")}
          />
          {errors.lastname && <p className="error-field">{errors.lastname.message}</p>}
          <input
            className="texti1"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p className="error-field">{errors.email.message}</p>}
          <input
            className="texti1"
            type="text"
            placeholder="Nome de Utilizador"
            {...register("username")}
          />
          {errors.username && <p className="error-field">{errors.username.message}</p>}
          <input
            className="texti1"
            type="password"
            placeholder="Palavra-Passe"
            {...register("password")}
          />
          {errors.password && <p className="error-field">{errors.password.message}</p>}
          <input
            className="texti1"
            type="password"
            placeholder="Confirme a Passe"
            {...register("password_confirmation")}
          />

          <div className="divCheck"></div>
          <button className="env2" type="submit">
            Sign Up
          </button>
          <Link to="/auth/login">
            <span>Voltar</span>
          </Link>
        </form>
        <div className="rigth1"></div>
      </div>
      <Toaster />
    </div>
  );
}

export default RegForm;
