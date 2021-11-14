import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';

const StyledTheme = styled.div`
 	font-family: "Poppins";
  letter-spacing: 1px;
	width: 360px;
	height: 640px;
	background-image: url('./images/background.png');
	margin: 0 auto;
	padding: 0;
`

ReactDOM.render(
  <React.StrictMode>
    <StyledTheme>
      <App />
    </StyledTheme>
  </React.StrictMode>,
  document.getElementById('root')
);
