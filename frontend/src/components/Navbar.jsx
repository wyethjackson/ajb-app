import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const activeClass = "text-white bg-blue-600 px-3 py-2 rounded-md text-sm font-medium";
    const inactiveClass = "text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

    return (
        <nav className="bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-white">
                            AJB
                        </Link>
                    </div>

                    {/* Menu Items */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                                Home
                            </NavLink>
                            <NavLink to="/dictionary" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                                Dictionary
                            </NavLink>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                                About
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
