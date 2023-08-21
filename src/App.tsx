import plants from './database/plants.json';
import navItems from './database/navItems.json';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SlideBar from './components/SlideBar/SlideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" 
                    element={
                    <>
                        <header className="header-container">
                            <div className="header-user">
                                <div className="user-logo-container">
                                    <button className="btn-active">
                                        <img src="/user-logo.png" alt="user-logo" className="user-logo" />
                                    </button>
                                </div>
                                <div className="user-name"><p>Welcome</p>Kosar</div>
                            </div>
                            <div className="header-slogan-container">
                                <h2 className="header-slogan">Choose your beautiful
                                    <span className="header-slogan-img-container">
                                        <img src="/plants/plant-1.png" alt="" className="header-slogan-img" />
                                    </span>
                                </h2>
                            </div>
                            <div className="header-utilities-container">
                                <SlideBar type="notification" imagePath="/notification-icon.svg" />
                                <SlideBar type="search" imagePath="/search-icon.svg" />
                            </div>
                        </header>
                        <main className="content-container">
                            <menu className="menu-filter">
                                <ul>
                                    <li className="menu-filter-item"><button className="menu-filter-item-button">All</button></li>
                                    <li className="menu-filter-item"><button className="menu-filter-item-button">Houseplants</button></li>
                                    <li className="menu-filter-item"><button className="menu-filter-item-button">Cactus</button></li>
                                    <li className="menu-filter-item"><button className="menu-filter-item-button">Bonsai</button></li>
                                    <li className="menu-filter-item"><button className="menu-filter-item-button">Succulents</button></li>
                                </ul>
                            </menu>
                            <Carousel plants={plants} />
                        </main>
                        <footer>
                            <NavigationBar items={navItems} />
                        </footer>
                    </>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
