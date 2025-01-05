const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Facebook</a></li>
        <li><a>Instagram</a></li>
        <li><a>Whatsapp</a></li>
        <li><a>Fiverr</a></li>
        <li><a>Contact</a></li>
    </>
    return (
        <>
            <div className="px-2 lg:px-10 mt-2 rounded-lg navbar bg-neutral text-neutral-content shadow-sm w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">Tanzim</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg px-1 font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline">Let&apos;s Talk</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;