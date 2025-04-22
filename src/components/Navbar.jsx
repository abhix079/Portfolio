import styles from './Navbar.module.css';
import { LuTableOfContents } from "react-icons/lu";
import { useState } from 'react';

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <div className={styles.mainContainer}>
                <span>Bugbite .</span>

                <div className={styles.navItems}>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <LuTableOfContents size={23} className={styles.hamburger} onClick={toggleSidebar} />
                </div>
            </div>

            {showSidebar && (
                <>
                    <div className={styles.backdrop} onClick={toggleSidebar}></div>
                    <div className={styles.sidebar}>
                        <li onClick={toggleSidebar}>Home</li>
                        <li onClick={toggleSidebar}>Skills</li>
                        <li onClick={toggleSidebar}>Experience</li>
                        <li onClick={toggleSidebar}>Projects</li>
                        <li onClick={toggleSidebar}>Contact</li>
                    </div>
                </>
            )}
        </>
    );
}

export default Navbar;
