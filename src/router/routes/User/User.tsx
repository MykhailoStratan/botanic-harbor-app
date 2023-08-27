import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user-wrapper">
            <header className="common-header">
                <Link to="/">
                    <button className="btn-header btn-arrow-back"></button>
                </Link>
                <h4>Plant Details</h4>
                <button className="btn-header btn-favourite"></button>
            </header>
            <main className="user-main">
                
            </main>
            <footer className="user-footer">
                
            </footer>
        </div>
    )
}