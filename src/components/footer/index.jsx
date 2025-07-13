import "./styles.css"
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {year} Sapientia.</p>
            </div>
        </footer>
    );
}

export default Footer;