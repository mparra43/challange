import Link from "next/link"




export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

           


                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <Link
                            className="nav-item nav-link"
                            href="/"
                        >
                            Inicio
                        </Link>

                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <Link
                            className="nav-item nav-link"
                            href="/login"
                        >
                            Logout
                        </ Link>
                    </ul>
                </div>
           
        </nav>
    )
}
