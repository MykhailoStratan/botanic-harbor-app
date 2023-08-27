import { Link } from "react-router-dom";

export default function Favourites() {
    return (
        <div className="favourites-wrapper">
            <header className="common-header">
                <Link to="/">
                    <button className="btn-header btn-arrow-back"></button>
                </Link>
                <h4>Favourites</h4>
                <button className="btn-header btn-favourite"></button>
            </header>
            <main className="favourites-main">
                
            </main>
            <footer className="favourites-footer">
                
            </footer>
        </div>
    )
}