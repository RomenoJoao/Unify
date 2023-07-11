import React from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes.routes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import toast, { Toaster } from "react-hot-toast";
const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AuthProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster/>
    </div>
  );
}

export default App;
