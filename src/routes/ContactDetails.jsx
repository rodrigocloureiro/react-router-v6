import { useParams, useNavigate } from "react-router-dom"

const ContactDetails = () => {

    const { id } = useParams();

    // 6 - Redirect

    const navigate = useNavigate();

    const handleContact = () => {
        console.log('Contato enviado!');
        return navigate('/');
    };

    return (
        <>
            <h1>Exibindo mais informações do contato: { id }</h1>
            <button onClick={ handleContact }>Enviar mensagem</button>
        </>
    );
}

export default ContactDetails
