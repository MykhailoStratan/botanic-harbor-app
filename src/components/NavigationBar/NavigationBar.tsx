import { NavigationItem } from '../../types/navigation-item.type';
import './NavigationBar.css';

import { FC, useState } from 'react';

const NavigationBar: FC<{ items: NavigationItem[] }> = ({ items }) => {
    const [avtiveNavItem, setActiveNavItem] = useState<string>(items[0].description);

    function onSetActiveNavItem(event: React.MouseEvent<HTMLLIElement>, itemDescription: string) {
        event.preventDefault();
        setActiveNavItem(itemDescription);
    }

    return (
        <div className="navigation">
            <ul>
                {items.map((item, index) => {
                    return <li className="navigation-item" key={index+Date()} onClick={(event) => onSetActiveNavItem(event, item.description)}>
                        <a href="" className="navigation-item-link">
                            <img src={item.imagePath} alt={item.description} className="navigation-item-icon" />
                        </a>
                        <p className={avtiveNavItem === item.description ? `navigation-item-description-shown` : `navigation-item-description-hidden`}>{item.description}</p>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default NavigationBar;