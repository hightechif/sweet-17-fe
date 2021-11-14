import Input from "./Input";
import styled from "styled-components";

const StyledDiv = styled.div`
    p {
        color: #909090;
        font-size: 10px;
        margin: 8px 10px 32px;
        text-align: left;
    }
`

const Form = (props) => {
    const {biodata, handleChange, handleSubmit, isRegistered, isLoginSuccess, isRegisterSuccess, isSubmit, errorMessage} = props;

    return (
        <form onSubmit={async (event) => await handleSubmit(event)} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <Input styledType="TwoLeft" type="text" name="name" value={biodata.name} onChange={(event) => handleChange(event)} placeholder="Siapa nama kamu?" />
                <Input styledType="TwoRight" type="text" name="phone" value={biodata.phone} onChange={(event) => handleChange(event)} placeholder="Minta nomor HP dong.." />
            </div>
            <StyledDiv>
                <p>*Kalau bisa ini diisi dengan nomor HP yang kamu pakai di aplikasi Indomaret Poinku ya</p>
            </StyledDiv>
            <div className="flex flex-wrap -mx-3 mb-6">
                {isRegistered && <div className="w-full px-3 mb-6 md:mb-0">
                    <button type="submit" className="w-full font-bold text-xl" variant="secondary">Login</button>
                </div>}
                {!isRegistered && <div className="w-full px-3 mb-6 md:mb-0">
                    <button type="submit" className="w-full font-bold text-xl" variant="secondary">Daftar</button>
                </div>}
            </div>
            <div className="w-full -mx-3 mb-6 text-center">
                {isRegistered && !isLoginSuccess && <p className="text-red-600 text-xs italic">Username or password is invalid</p>}
                {!isRegistered && isSubmit && !isRegisterSuccess && <p className="text-red-600 text-xs italic">{errorMessage}</p>}
                {!isRegistered && isSubmit && isRegisterSuccess && <p className="text-green-600 text-xs italic">Registration Success</p>}
            </div>
        </form>
    )
}

export default Form;
