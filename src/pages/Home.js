import { useState, useEffect } from 'react';
import store from '../store';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledHome = styled.div`
    justify-content: center;
    align-items: center;
    img {
        padding-top: 60%;
    }
`

const Home = () => {
    const [ qrCode, setQrCode ] = useState("");
    const navigate = useNavigate();

    const onLoadQRCode = async (param = null) => {
        try {
            const GET_QR_CODE = await store.actions.qrcode.getQRcode();
            setQrCode(GET_QR_CODE);
        } catch (error) {
            setQrCode("");
        }
    }

    useEffect(() => {
        onLoadQRCode();
        setTimeout(() => navigate('/register'), 4000);
    }, [qrCode, navigate])

    return (
        <StyledHome>
            <img src="./images/logo.png" alt="logo" />
        </StyledHome>
    )
}

export default Home;
