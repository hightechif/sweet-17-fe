import styled from "styled-components";

const StyledInput = styled.div`
    margin: 5px 16px;
`

const Card = (props) => {
    return (
        <div className="card_container">
            <h1>{props.title}</h1>
            <StyledInput name={props.name} id={props.name} type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} className="appearance-none block bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
        </div>
    )
}

export default Card
