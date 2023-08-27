import { Link } from 'react-router-dom';
import './UserCart.css';

export default function UserCart() {
    return (
        <div className="details-wrapper">
            <header className="common-header">
                <Link to="/">
                    <button className="btn-header btn-arrow-back"></button>
                </Link>
                <h4>My Cart</h4>
                <button className="btn-header btn-notification"></button>
            </header>
            <main className="user-cart-main">
                <h3 className="items-total">3 Items</h3>
                <ul className="cart-item-list">
                    <li>
                        <article className="cart-item">
                            <img src="/plants/monstera.png" alt="" className="cart-item-img-small" />
                            <div className="cart-item-info">
                                <section>
                                    <div className="cart-item-header">
                                        <h4 className="cart-item-name">Plant name</h4>
                                        <p className="cart-item-rating">
                                            <img src="/star-icon.svg" alt="star" className="rating-image" />4.8
                                        </p>
                                    </div>
                                    <p className="cart-item-description">Leafy, green, tropical foliage.</p>
                                </section>
                                <section className="cart-item-price">
                                    <p>$32.0</p>
                                    <div className="cart-item-quantity">
                                        <button className="increase-quantity">-</button>
                                        <p className="cart-item-quantity-value">1</p>
                                        <button className="decrease-quantity">+</button>
                                    </div>
                                </section>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article className="cart-item cart-item-swapped">
                            <img src="/plants/monstera.png" alt="" className="cart-item-img-small" />
                            <div className="cart-item-info">
                                <section>
                                    <div className="cart-item-header">
                                        <h4 className="cart-item-name">Plant name</h4>
                                        <p className="cart-item-rating">
                                            <img src="/star-icon.svg" alt="star" className="rating-image" />4.8
                                        </p>
                                    </div>
                                    <p className="cart-item-description">Leafy, green, tropical foliage.</p>
                                </section>
                                <section className="cart-item-price">
                                    <p>$32.0</p>
                                    <div className="cart-item-quantity">
                                        <button className="increase-quantity">-</button>
                                        <p className="cart-item-quantity-value">1</p>
                                        <button className="decrease-quantity">+</button>
                                    </div>
                                </section>
                            </div>
                        </article>
                        <button className="cart-item-remove"><img src="/bin-icon.svg" alt="" /></button>
                    </li>
                    <li>
                        <article className="cart-item">
                            <img src="/plants/monstera.png" alt="" className="cart-item-img-small" />
                            <div className="cart-item-info">
                                <section>
                                    <div className="cart-item-header">
                                        <h4 className="cart-item-name">Plant name</h4>
                                        <p className="cart-item-rating">
                                            <img src="/star-icon.svg" alt="star" className="rating-image" />4.8
                                        </p>
                                    </div>
                                    <p className="cart-item-description">Leafy, green, tropical foliage.</p>
                                </section>
                                <section className="cart-item-price">
                                    <p>$32.0</p>
                                    <div className="cart-item-quantity">
                                        <button className="increase-quantity">-</button>
                                        <p className="cart-item-quantity-value">1</p>
                                        <button className="decrease-quantity">+</button>
                                    </div>
                                </section>
                            </div>
                        </article>
                    </li>
                </ul>
            </main>
            <footer className="user-cart-footer">
                <div className="footer-estimate">
                    <p>
                        <span className="estimate-title">Subtotal:</span>
                        <span className="estimate-value">$140</span>
                    </p>
                    <p>
                        <span className="estimate-title">Delivery fee:</span>
                        <span className="estimate-value">$10</span>
                    </p>
                    <p>
                        <span className="estimate-title">Discount:</span>
                        <span className="estimate-value">15%</span>
                    </p>
                </div>
                <div className="footer-controls">
                    <p className="total-price">$127.5</p>
                    <button className="buy-now">Checkout</button>
                </div>
            </footer>
        </div>
    );
}