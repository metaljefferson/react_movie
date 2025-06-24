import { useState } from "react";
import backgroundImage from "../assets/movie-2270554_1280.png";


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@admin" && password === "123") {
      onLogin();
    } else {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Background" className="w-full h-full" />
        <div className=" inset-0 bg-black bg-opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl w-full max-w-md p-8 text-white">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Bem-vindo 
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium block mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Digite seu e-mail"
              />
            </div>
           <div>
              <label className="text-sm font-medium block mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/30 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-white focus:outline-none"
                  title={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9.27-3.11-10.5-7.5a10.05 10.05 0 013.875-5.325M15 15l-3-3m0 0l-3-3m3 3l3-3m-3 3l-3 3" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 text-blue-500" />
                Lembrar de mim
              </label>
              <a href="#" className="text-blue-300 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded font-semibold transition"
            >
              Entrar
            </button>
            <p className="text-center text-sm mt-6">
              Não tem uma conta?
              <a
                href="#"
                className="text-blue-300 font-semibold hover:underline ml-1"
              >
                Cadastre-se
              </a>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
