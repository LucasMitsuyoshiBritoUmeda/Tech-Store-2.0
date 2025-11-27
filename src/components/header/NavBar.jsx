import { Link } from "react-router-dom";

function NavBar() {
    return( 
        <header>
        <nav className="container navbar navbar-expand-lg bg-body-tertiary">
                <h1>Tech Store</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="menu me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="../main/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Promoções</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Notebook</Link></li>
                            <li><Link className="dropdown-item" to="../main/Perifericos">Periféricos</Link></li>
                            <li><Link className="dropdown-item" to="#">Desktops</Link></li>
                        </ul>
                    </li>
                </ul>
                </div>
        </nav>
        </header>
    );
}
export default NavBar;