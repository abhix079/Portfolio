    import styles from './HomePage.module.css';
    import avatar from '../assets/Profile.png';
    import { SiLeetcode } from "react-icons/si";
    import { FiGithub } from "react-icons/fi";
    import { FaLinkedinIn } from "react-icons/fa";
    import { FaDownload } from "react-icons/fa6";
    import { GrContact } from "react-icons/gr";


    function HomePage(){
        return(
            <>
    <div className={styles.mainContainer}>
    <div className={styles.upperBar}>
        Graphics Designer & Full Stack Developer
    </div>
    <div className={styles.slogan}>
        <h1>Transforming ideas</h1>
        <h1>into</h1>
        <h1>Graphics & Websites</h1>
    </div>
    <div className={styles.sloganMobile}>
        <h1>Transforming</h1>
        <h1>ideas into</h1>
        
        <h1>websites</h1>

    </div>
    <div className={styles.aboutSection}>
    <p>Hey! I'm <span>Abhishek Kr. Prajapati</span> — a pre-final B.Tech student who builds sleek websites and engaging graphic designs.</p>
    <p>I work in a custom dev environment powered by <span>Arch Linux</span>, running <span>Hyprland</span> as my window manager and <span>Kitty</span> as my terminal.  </p>
    </div>

    <div className={styles.buttons}>
        <button><FaDownload/>&nbsp;Download Resume</button>
        <button><GrContact/>&nbsp;Contact Me</button>
    </div>

    <div className={styles.socialIcons}>
    <a href="https://leetcode.com/u/" target="_blank"> <li>  <SiLeetcode size={19}/></li></a>
    <a href="https://github.com/abx0" target="_blank"><li> <FiGithub size={19}/></li></a>
    <a href="https://www.linkedin.com/in/abhix079/" target="_blank"><li> <FaLinkedinIn size={19}/></li></a>
    </div>
    <div className={styles.activeUser}>
        <div className={styles.greenDot}></div>
        <p>1 active visitor (that's you)</p>
    </div>

    </div>
            </>
        );
    }

    export default HomePage;
