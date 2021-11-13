import Router from './router';
import { ThemeProvider } from 'styled-components'
import IndomaretTheme from './assets/Theme';
import './App.css';
import './styles/css/Main.css';
import styled from 'styled-components';
import store from './store';
import { useState, useEffect } from 'react';
require('dotenv').config();

const StyledFont = styled.div`
  font-family: "Open Sans";
`

function App() {
	const [ endpoint, setEndpoint ] = useState(null);
	
	const validateEndpoint = async (params = null) => {
		try {
			const IS_ENDPOINT_EXPIRED = await store.actions.qrcode.endpointValidation();
			const { data } = IS_ENDPOINT_EXPIRED;
			const message = data.message;
			const endpoint = message.split(' ')[0];
			setEndpoint(endpoint);
			setEndpoint("2zf7HjZko");
		} catch (error) {
			setEndpoint(null)
		}
	}

	useEffect(() => {
		validateEndpoint();
	}, [])

	return (
		<ThemeProvider theme={IndomaretTheme} >
			<StyledFont>
				<Router endpoint={endpoint}/>
			</StyledFont>
		</ThemeProvider>
	)
}

export default App;
