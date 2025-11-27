function Home(){
	return(
		<div>
			<main className="container" id="produtos">
			<h2>Produtos em Destaque</h2>
			<div className="produtos-grid">
				<div className="produto">
					<img src="https://imgs.search.brave.com/fYJAEu0IiFGgNoyHRSGAASXEPozX0C80OFTltqm-OX4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hLXN0/YXRpYy5tbGNkbi5j/b20uYnIvMjgweDIx/MC9ub3RlYm9vay1n/YW1lci1hY2VyLW5p/dHJvLTUtaW50ZWwt/Y29yZS1pNS04Z2It/NTEyZ2Itc3NkLTE1/Ni1mdWxsLWhkLW52/aWRpYS1ndHgtMTY1/MC00Z2ItbGludXgv/bWFnYXppbmVsdWl6/YS8yMzY0NjMxMDAv/MjJkYmZkYTYwMjQ1/ZDliMGExNDAxMjZl/OWViMWQ2MDEuanBn" alt="Notebook X" />
					<h3>Notebook Médio </h3>
					<p>Processador Intel i5 13gen, 8GB RAM, SSD 514GB</p>
					<span className="preco">R$ 3.499,00</span>
					<input type="button" value="Adicionar ao Carrinho" onClick={() => alert('Produto adicionado ao carrinho!')} className="adicionar-carrinho" />
				</div>
				<div className="produto">
					<img src="https://imgs.search.brave.com/eYP5T3kW6dCwsIZd4fjU2pGYMyJHI7Rhyb71TaCMrXw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFFbXZROW1ONEwu/anBn" alt="Desktop Gamer Y" />
					<h3>Desktop Gamer Y</h3>
					<p>Ryzen 5, 16GB RAM, RTX 3060, NvMe2 1Tb</p>
					<span className="preco">R$ 6.999,00</span>
					<input type="button" value="Adicionar ao Carrinho" onClick={() => alert('Produto adicionado ao carrinho!')} className="adicionar-carrinho" />
				</div>
				<div className="produto">
					<img src="https://imgs.search.brave.com/dDNBMN0pygl4ck0PaWKcE24t4c0PfXDaWpLGPQb-Udk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFQNVV5bGo1VUwu/anBn" alt="Mouse Óptico Z" />
					<h3>Mouse Óptico Z</h3>
					<p>RGB, 7200 DPI, USB</p>
					<span className="preco">R$ 129,00</span>
					<input type="button" value="Adicionar ao Carrinho" onClick={() => alert('Produto adicionado ao carrinho!')} className="adicionar-carrinho" />
				</div>
			</div>
		</main>
		</div>
	)
}
export default Home;
