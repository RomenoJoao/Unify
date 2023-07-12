import React from 'react'
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

export default function Aux() {
  const { user } = useContext(AuthContext);
        if (!user) return <span>carregando</span>
  return <>{user.name}</>;
}
