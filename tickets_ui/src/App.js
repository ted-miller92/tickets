import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Tickets from './pages/Tickets';
import Items from './pages/Items';

import Navigation from './components/Navigation';

function App() {
	

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage/>}	/>
					<Route path="/tickets" element={<Tickets/>}	/>
					<Route path="/items" element={<Items/>}	/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
