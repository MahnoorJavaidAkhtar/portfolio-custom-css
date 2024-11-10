import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
return (
    <div className="footer">
    <p className="footer-text">Stay Connected with My Work:</p>

    <div className="footer-icons">
        {/* Email */}
        <a href="mailto:mahnoorjavaid342@gmail.com" className="footer-link">
        <span  className="icon">
            <AiOutlineMail/>
        </span> 
        Email
        </a>

        {/* GitHub */}
        <a
        href="https://github.com/MahnoorJavaidAkhtar"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        >
        <span className="icon">
            <AiFillGithub/>
        </span>
        Github
        </a>

        {/* LinkedIn */}
        <a
        href="https://www.linkedin.com/in/mahnoor-javaid-a9687a283/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        >
        <span className="icon">
            <AiFillLinkedin/>
        </span>
        Linkedin
        </a>
        <a
        href="https://www.instagram.com/mahnoor._.javaid45?igsh=MWRxZ3hmczF1MHc4eg=="
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        >
        <span className="icon">
            <AiFillInstagram/>
        </span>
        Instagram
        </a>
    </div>

    <p className="footer-rights">
        © 2024 Mahnoor Javaid. All Rights Reserved.
    </p>
    </div>
    );
}