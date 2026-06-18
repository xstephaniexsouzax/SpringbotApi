import './styles.css';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function ListaUsuariosPage() {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        async function buscarUsuarios() {
            try {
                //SE DER CERTO
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                //SE DER ERRADO
                toast.error('Erro ao buscar usuários');
            }
        }
        buscarUsuarios();
    }, []);
    return (
        <div className="lista-usuarios">
            <h1>Lista de Usuários</h1>
            {
                usuarios.length === 0 ? (
                    <p>Nenhum usuário cadastrado.</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            )}
        </div>
    )
}