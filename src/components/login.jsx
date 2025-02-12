import background from '../images/fundo-login1.jpg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className="login-section">
      <img src={background} alt="foto de fundo" className="hero-image" />
      <div className="login-container">
        <form className="login-form">
          <h1>LOGIN</h1>
          <div className="login-body">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder="Digite seu email" required />
          </div>
          <div className="login-body">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <p className="signup-link">
            Não possui cadastro? <Link to="/signup">Cadastre-se aqui!</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
