import plants from './database/plants.json';
import navItems from './database/navItems.json';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
    return (
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
                    <div className="utilities utilities-notifications">
                        <button className="btn-active btn-notifications">
                            <img src="/notification-icon.svg" alt="" className="btn-icon" />
                        </button>
                        <select name="" id="" className="dropdown-notifications"></select>
                    </div>
                    <div className="utilities utilities-search">
                        <button className="btn-active btn-search">
                            <img src="/search-icon.svg" alt="" className="btn-icon" />
                        </button>
                        <input name="" id="" className="inpuit-search"></input>
                    </div>
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
                <Carousel plants={plants}/>
            </main>
            <footer>
                {/* <div className="navigation">
                    <ul>
                        <li className="navigation-item">
                            <button className="btn-active navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    <img src="/home-icon.svg" alt="Home" className="navigation-item-logo" />
                                </a>
                            </button>
                            <p>Home</p>
                        </li>
                        <li className="navigation-item">
                            <button className="btn-active navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    <img src="/heart-big-icon.svg" alt="Favourites" className="navigation-item-logo" />
                                </a>
                            </button>
                            <p>Favourites</p>
                        </li>
                        <li className="navigation-item">
                            <button className="btn-active navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    <img src="/cart-icon.svg" alt="" className="navigation-item-logo" />
                                </a>  
                            </button>
                            <p>Cart</p>
                        </li>
                        <li className="navigation-item">
                            <button className="btn-active navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    <img src="/profile-icon.svg" alt="" className="navigation-item-logo" />
                                </a>
                            </button>
                            <p>Profile</p>
                        </li>
                    </ul>
                </div> */}
                <NavigationBar items={navItems}/>
            </footer>
        </>
    )
}

export default App
