import './styles.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <nav>
                <Link to="/">Início</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/usuarios">Lista de usuários</Link>
            </nav>

        </header>
    );
}