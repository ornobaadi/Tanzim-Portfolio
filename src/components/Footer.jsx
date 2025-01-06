
const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal flex flex-col footer-center bg-neutral text-primary-content p-10">
                <aside>
                    <img src="/Tanzim-logo-2.png" alt="" />
                    <p className="font-bold">
                        Habib Hasan Tanzim
                        <br />
                        Professional Dropshipping Expert
                    </p>
                </aside>
                <nav>
                    <div className="grid grid-flow-row md:grid-flow-col gap-4 *:hover:text-accent *:hover:font-bold *:cursor-pointer">
                        <a>Home</a>
                        <a>Services</a>
                        <a>Portfolio</a>
                        <a>Resume</a>
                        <a>Pricing</a>
                        <a>Contact</a>
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>
                        Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
                        <a
                            href="https://github.com/ornobaadi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-base-300 text-base-content hover:underline hover:text-orange-500 hover:font-semibold"
                        >
                            Ornob Aadi
                        </a>
                    </p>
                </aside>
            </footer>

        </>
    );
};

export default Footer;