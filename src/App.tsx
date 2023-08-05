
import './App.css'

function App() {
    return (
        <>
            <header className="header-container">
                <div className="header-user">
                    <div className="user-logo-container"><img src="" alt="user-logo" className="user-logo" /></div>
                    <div className="user-name"><p>Welcome</p>Kosar</div>
                </div>
                <div className="header-slogan-container">
                    <h2 className="header-slogan">Choose your beautiful</h2>
                    <img src="" alt="" className="header-slogan-img" />
                </div>
                <div className="header-utilities-container">
                    <div className="utilities-notifications">
                        <button className="btn-notifications"></button>
                        <select name="" id="" className="dropdown-notifications"></select>
                    </div>
                    <div className="utilities-search">
                        <button className="btn-search"></button>
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
                <div className="content-carousel">
                    <ul>
                        <li className="content-carousel-item">
                            <div className="carousel-item-card">
                                <input type="text" className="carousel-item-save" /><img src="" alt="" className="carousel-item-image" />
                                <p className="carousel-item-price"></p>
                                <div className="carousel-item-rating">
                                    <img src="" alt="" className="rating-image" />
                                    <p className="rating-level"></p>
                                </div>
                            </div>
                            <div className="card-description">
                                <h3 className="description-plant-name"></h3>
                                <p className="description-plant-hint"></p>
                            </div>
                        </li>
                        <li className="content-carousel-item">
                            <div className="carousel-item-card">
                                <input type="text" className="carousel-item-save" /><img src="" alt="" className="carousel-item-image" />
                                <p className="carousel-item-price"></p>
                                <div className="carousel-item-rating">
                                    <img src="" alt="" className="rating-image" />
                                    <p className="rating-level"></p>
                                </div>
                            </div>
                            <div className="card-description">
                                <h3 className="description-plant-name"></h3>
                                <p className="description-plant-hint"></p>
                            </div>
                        </li>
                        <li className="content-carousel-item">
                            <div className="carousel-item-card">
                                <input type="text" className="carousel-item-save" /><img src="" alt="" className="carousel-item-image" />
                                <p className="carousel-item-price"></p>
                                <div className="carousel-item-rating">
                                    <img src="" alt="" className="rating-image" />
                                    <p className="rating-level"></p>
                                </div>
                            </div>
                            <div className="card-description">
                                <h3 className="description-plant-name"></h3>
                                <p className="description-plant-hint"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer>
                <div className="navigation">
                    <ul>
                        <li className="navigation-item">
                            <button className="navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    <img src="" alt="" className="navigation-item-logo" />
                                    Home
                                </a>
                            </button>
                        </li>
                        <li className="navigation-item">
                            <button className="navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    Favourites
                                    <img src="" alt="" className="navigation-item-logo" />
                                </a>
                            </button>
                        </li>
                        <li className="navigation-item">
                            <button className="navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    Cart
                                    <img src="" alt="" className="navigation-item-logo" />
                                </a>
                            </button>
                        </li>
                        <li className="navigation-item">
                            <button className="navigation-item-button">
                                <a href="" className="navigation-item-link">
                                    Profile
                                    <img src="" alt="" className="navigation-item-logo" />
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default App
