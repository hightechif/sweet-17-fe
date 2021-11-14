import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../components/Form';
import store from '../store';

const StyledDiv = styled.div`
    padding: 0 5%;
    padding: 152px 40px;
    box-sizing: border-box;
    h1 {
        margin-top: 40px;
        margin-bottom: 24px;
        text-align: center;
        font-weight: 600px;
        font-size: 18px;
    }
    .form__container {
        border-radius: 20px;
        padding: 10px 10px;
        background: #FFFFFF;
    }
    p {
        color: #909090;
        font-size: 10px;
    }
`

const Register = (props) => {
    const { endpoint } = props;
    const [ userDTO, setUserDTO ] = useState({
        "name": "",
        "phone": ""
    });
    const [ isRegisterSuccess, setIsRegisterSuccess ] = useState(true);
    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    let navigate = useNavigate();

    const handleChange = (event) => {
        const { value, id } = event.target;
        setUserDTO(prev => ({...prev, [id]:value}));
    }

    const handleSubmit = async (event, error) => {
        event.preventDefault();
        setIsSubmit(true);
        try {
            if (userDTO.name === "" || userDTO.phone === "") {
                setErrorMessage("Name or phone can't be empty");
                throw(error);
            }
            setErrorMessage("Phone already exist");
            const postRegister = await store.actions.game.register(userDTO.name, userDTO.phone);
            const { data } = postRegister;
            setIsRegisterSuccess(!!data);
            navigate(`/game/${endpoint}`);
        } catch (error) {
            setIsRegisterSuccess(false);
        }
    }

    useEffect(() => {
        
        return () =>{
            // do componentWillUnmount
        }
    })

    console.log(endpoint);
    return (
        <StyledDiv>
            <div className="form__container">
                <h1 className="font-bold text-gray-700">Daftar Sebentar, yuk!</h1>
                <Form biodata={userDTO} handleChange={handleChange} handleSubmit={handleSubmit} isRegistered={false} isRegisterSuccess={isRegisterSuccess} isSubmit={isSubmit} errorMessage={errorMessage} />
            </div>
        </StyledDiv>
    )
}

export default Register;
