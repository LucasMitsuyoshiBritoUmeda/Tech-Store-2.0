function Header() {
return (
    <header>
        <nav class="container">
        <h1>Trafico's Tech Store</h1>
        <ul class="menu">
        <li>
            <a href="#contato">Sobre</a>
        </li>
        <li>
            <a href="produtos.html">Produtos</a>
            <ul>
            <li>
                <a href="notebooks.html">Notebooks</a>
            </li>
            <li>
                <a href="desktops.html">Desktops</a>
            </li>
            <li>
                <a href="perifericos.html">Périfericos</a>
            </li>
            </ul>
        </li>
        <li>
            <a href="carrinho.html">Carrinho</a>
        </li>
        </ul>
    </nav>
    </header>
);
}
export default Header;
