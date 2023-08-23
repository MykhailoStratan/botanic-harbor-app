
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './router/routes/Root/Root';
import PlantDetails from './router/routes/PlantDetails/PlantDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/"
                    element={<Root/>} />
                <Route 
                    path="/details" 
                    element={<PlantDetails/>}
                />
            </Routes>
        </BrowserRouter>

    )
}

export default App;
