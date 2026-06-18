import './styles.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="header">
            <h1>Sistema de gerenciamento de usuários</h1>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/usuarios">Lista de usuários</Link>
            </nav>

        </header>
    );
}