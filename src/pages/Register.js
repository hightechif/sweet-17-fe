import { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../components/Form';
import store from '../store';

const StyledDiv = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 5%;
    h1 {
        margin-bottom: 10px;
    }
    .form__container {
        margin: 0 auto;
        padding: 20px 30%;
        box-sizing: border-box;
    }
`

const Register = () => {
    const [ userDTO, setUserDTO ] = useState({
        "phone": "",
        "password": ""
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
        setIsSubmit(true);
        event.preventDefault();
        try {
            if (userDTO.phone === "" || userDTO.password === "") {
                setErrorMessage("Phone or password can't be empty");
                throw(error);
            }
            setErrorMessage("Phone already exist");
            const postRegister = await store.actions.game.register(userDTO.phone, userDTO.password);
            const { data } = postRegister;
            setIsRegisterSuccess(!!data);
        } catch (error) {
            setIsRegisterSuccess(false);
        }
    }

    useEffect(() => {
        const getToken = window.localStorage.getItem("ACCESS_TOKEN") ?? null;
        if (getToken) {
            navigate("/");
        }
        return () =>{
            // do componentWillUnmount
        }
    })

    return (
        <StyledDiv>
            <div className="form__container">
                <h1 className="uppercase font-bold text-gray-700">Register Page</h1>
                <Form biodata={userDTO} handleChange={handleChange} handleSubmit={handleSubmit} isRegistered={false} isRegisterSuccess={isRegisterSuccess} isSubmit={isSubmit} errorMessage={errorMessage} />
            </div>
        </StyledDiv>
    )
}

export default Register;
