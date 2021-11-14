import { useState, useEffect } from 'react';
import store from '../store';
import { useNavigate } from 'react-router';

const Home = () => {
    const [qrCode, setQrCode] = useState("");
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
        setInterval(() => 
            navigate('/register'), 
            2000
        )
    }, [navigate])

    console.log(qrCode);
    return (
        <div>
        </div>
    )
}

export default Home;
