import styled from 'styled-components';

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
        color: #000000;
    }
    .form__container {
        border-radius: 30px;
        padding: 10px 10px;
        background: #FFFFFF;
    }
    p {
        color: #909090;
        font-size: 10px;
    }
`

const Instruction = (props) => {
    const { name } = props;

    return (
        <StyledDiv>
            <div className="form__container">
                <h1 className="font-bold text-gray-700">Halo {name}!</h1>
                
            </div>
        </StyledDiv>
    )
}

export default Instruction;
