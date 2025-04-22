import styles from './Skills.module.css';
import kitty from '../assets/kitty.png';
import node from '../assets/node.png';

function Skills() {
    const TechStack = [
        {
            name: 'React',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            type: 'Frontend'
        },
        {
            name: 'Node.js',
            image: node,
            type: 'Backend'
        },
        {
            name: 'Express.js',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            type: 'Backend'
        },
        {
            name: 'MongoDB',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            type: 'Database'
        },
        {
            name: 'Arch Linux',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg',
            type: 'OS'
        },
        // {
        //     name: 'Kitty',
        //     image: 'https://cdn.jsdelivr.net/gh/kovidgoyal/kitty/logo/kitty.svg',
        //     type: 'OS'
        // },
        {
            name: 'C++',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
            type: 'Language'
        },
        {
            name: 'Java',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            type: 'Language'
        },
        {
            name: 'Python',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            type: 'Language'
        },

        {
            name: 'Bootstrap',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
            type: 'Frontend'
        }
        
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeading}>
                <h1>Tech Stacks</h1>
                <p>Technologies & tools I'm working with</p>
            </div>

            <div className={styles.techGrid}>
                {TechStack.map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                        <img
                            src={tech.image}
                            alt={tech.name}
                            className={styles.techImage}
                            style={{
                                ...tech.style, // Apply custom size if defined
                                filter: tech.name === 'Express.js' ? 'invert(1)' : 'none',
                                verticalAlign: 'top' // Ensures alignment with text
                            }}
                        />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
