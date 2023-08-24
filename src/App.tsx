
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from './router/routes/Root/Root';
import PlantDetails from './router/routes/PlantDetails/PlantDetails';
import UserCart from './router/routes/UserCart/UserCart';
import Favourites from './router/routes/Favourites/Favourites';
import User from './router/routes/User/User';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Root />} />
                <Route
                    path="/details"
                    element={<PlantDetails />}
                />
                <Route
                    path="/cart"
                    element={<UserCart />} />
                <Route
                    path="/favourites"
                    element={<Favourites />} />
                <Route
                    path="/user"
                    element={<User />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App;
