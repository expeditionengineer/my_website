import React from 'react';

import NavBarItem from './navbar_item';

interface NavItemData {
    id: number,
    name: string,
}

const NavBar: React.FC = () => {
    
    const navbar_items: Array<NavItemData> = [
        {id: 0, name: 'about'},
        {id: 1, name: 'skills'},
        {id: 2, name: 'work'},
        {id: 3, name: 'projects'},
        {id: 4, name: 'contact'},
        {id: 5, name: 'resume'},
    ]
    
    return (
        <div className="flex flex-row gap-4 fixed right-0">
            {navbar_items.map((navItem: NavItemData) => {
                return <NavBarItem name={navItem.name} index={navItem.id} key={navItem.id} />
            })}
        </div>
    );
}

export default NavBar;