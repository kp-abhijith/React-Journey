
import { Link, NavLink } from 'react-router'

const navClass = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${isActive
        ? 'text-orange-600'
        : 'text-gray-700 hover:text-orange-600'
    }`

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-4">

                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="shrink-0">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center gap-6">
                        <NavLink to="/" end className={navClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={navClass}>
                            About
                        </NavLink>

                        <NavLink to="/contact" className={navClass}>
                            Contact
                        </NavLink>
                        <NavLink to="/User/101" className={navClass}>
                            User
                        </NavLink>
                        <NavLink to="/Github" className={navClass}>
                            Github
                        </NavLink>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="text-gray-700 hover:text-orange-600"
                        >
                            Log in
                        </Link>

                        <Link
                            to="/"
                            className="rounded-lg bg-orange-600 px-5 py-2.5 text-white hover:bg-orange-700"
                        >
                            Get started
                        </Link>
                    </div>

                </div>
            </nav>
        </header>
    )
}
