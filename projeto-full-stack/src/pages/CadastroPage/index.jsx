import './style.css';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

function limparCampos() {
    setNome('');
    setEmail('');
    setSenha('');
}

async  function enviarFormulario(event) {
    event.preventDefault();
    setEstaEnviando(true);

    const dadosFormulario = {
        nome: nome,
        email:email,
        senha: senha
    };
    try {        
            const resposta = await api.post('http://localhost:3000/api/usuarios', dadosFormulario);
            console.log('Resposta do servidor:', resposta.data);
            alert('Usuário cadastrado com sucesso!');
            limparCampos();
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário.');
        } finally {
            setEstaEnviando(false);
        }
}

    
}