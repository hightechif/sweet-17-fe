import { useState, useEffect } from 'react';
import store from '../store';

const Home = () => {
    const [ qrCode, setQrCode ] = useState("");

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
    }, [])

    console.log(qrCode);
    return (
        <div>
            HOME
        </div>
    )
}

export default Home;
