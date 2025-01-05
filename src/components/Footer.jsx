
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-neutral text-primary-content p-10">
            <aside>
                <img src="/Tanzim-logo-2.png" alt="" />
                <p className="font-bold">
                    Habib Hasan Tanzim
                    <br />
                    Web Designer & Web Developer
                </p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4 *:hover:text-accent *:hover:font-bold *:cursor-pointer">
                    <a>Home</a>
                    <a>Services</a>
                    <a>Portfolio</a>
                    <a>Resume</a>
                    <a>Pricing</a>
                    <a>Contact</a>
                </div>
            </nav>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;