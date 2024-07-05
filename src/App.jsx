import './App.css';
//import router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import views
import Home from './components/views/Home';
import Questions from './components/views/Questions';
import NuevoSimulador from './components/views/NuevoSimulador';

//import components
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/preguntas" element={<Questions />} />
					<Route path="/simulador" element={<NuevoSimulador />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
