import React from 'react';

interface NavBarItemProps {
    name: string
    index: number
}

const NavBarItem: React.FC<NavBarItemProps> = ({ name, index} ) => {
    return (
        <>
            <a href={"#" + name} className="hover:text-red-500"><span style={{ color: "red" }}>{index}.</span> {name.toUpperCase()}</a>|
        </>
    );
}

export default NavBarItem;