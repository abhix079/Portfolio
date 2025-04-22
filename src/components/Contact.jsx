import styles from './Contact.module.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

function Contact() {
    return (
        <>
            <div className={styles.mainHeading}>
                <h1>Connect with </h1>
                <h1 id={styles.spanHeading}>me.</h1>
            </div>

            <div className={styles.contactContent}>
                <div className={styles.leftSide}>
                    <p>
                        If you're looking for a designer and/or developer, or if you have any project or idea in mind, feel free to reach out via{" "}
                        <a
                            href="mailto:abhishek788k@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            email <MdArrowOutward />
                        </a>
                    </p>



                </div>

                <div className={styles.rightSide}>
                    <form>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

            <div className={styles.footer}>
                <hr />
                <div className={styles.footerText}>
                    <p>&copy;2025 All Rights Reserved</p>
                    <p>Developed by Abhishek Prajapati</p>
                
                </div>
            </div>
        </>
    );
}

export default Contact;
