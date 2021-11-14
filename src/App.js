import Router from './router';
import { ThemeProvider } from 'styled-components'
import IndomaretTheme from './assets/Theme';
import './styles/css/Main.css';
import store from './store';
import { useState, useEffect } from 'react';
require('dotenv').config();

function App() {
	const [ endpoint, setEndpoint ] = useState(null);
	
	const validateEndpoint = async (params = null) => {
		try {
			const IS_ENDPOINT_EXPIRED = await store.actions.qrcode.endpointValidation();
			const { data } = IS_ENDPOINT_EXPIRED;
			const message = data.message;
			const endpoint = message.split(' ')[0];
			setEndpoint(endpoint);
			setEndpoint("2zf7HjZko"); // example
		} catch (error) {
			setEndpoint(null);
		}
	}

	useEffect(() => {
		validateEndpoint();
	}, [])

	return (
		<ThemeProvider theme={IndomaretTheme} >
			<Router endpoint={endpoint}/>
		</ThemeProvider>
	)
}

export default App;
