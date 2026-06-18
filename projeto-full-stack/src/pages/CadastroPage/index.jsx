import { toast } from 'react-toastify';
import './style.css';
import api from '../../services/api';
import { useState } from 'react';

export default function CadastroPage() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    function limparCamposDoFormulario() {
        setNome('');
        setEmail('');
        setSenha('');
    }

    async function enviarFormulario(event) {
        event.preventDefault();
        setEstaEnviando(true);

        const dadosFormulario = {
            nome: nome,
            email: email,
            senha: senha
        };
        try {
            const resposta = await api.post('/usuarios', dadosFormulario);
            // SE DER CERTO
            toast.success(resposta.data.mensagem);
            limparCampos();
        } catch (error) {
            // SE DER ERRADO
            const mensagemDoServidor = error.response?.data?.mensagem
            toast.error(mensagemDoServidor)
        } finally {
            //EXECUTA SEMPRE, INDEPENDENTE DO RESULTADO
            setEstaEnviando(false);

        }

        return (
            <div className="cadastro-page">
                <h1>Cadastro de Usuário</h1>
                <form onSubmit={enviarFormulario}>
                    <div className='grupo-form'>
                        <label htmlFor="campo-nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div >
                    <div className='grupo-form'>
                        <label htmlFor="campo-email">Email:</label>
                        <input
                            type="email"
                            id="campo-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='grupo-form'>
                        <label htmlFor="campo-senha">Senha:</label>
                        <input
                            type="password"
                            id="campo-senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={estaEnviando}>
                        {estaEnviando ? 'Enviando...' : 'Cadastrar'}
                    </button>
                </form>
            </div>
        )
    }


}