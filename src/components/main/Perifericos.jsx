function Perifericos(){
	return(
		<div>
			<main className="container" id="produtos">
			<h2>Produtos em Destaque</h2>
			<div className="produtos-grid">
				<div className="produto">
					<img src="https://imgs.search.brave.com/dDNBMN0pygl4ck0PaWKcE24t4c0PfXDaWpLGPQb-Udk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFQNVV5bGo1VUwu/anBn" alt="Mouse Óptico Z" />
					<h3>Mouse Óptico Z</h3>
					<p>RGB, 7200 DPI, USB</p>
					<span className="preco">R$ 129,00</span>
					<input type="button" value="Adicionar ao Carrinho" onClick={() => alert('Produto adicionado ao carrinho!')} className="adicionar-carrinho" />
				</div>
				<div className="produto">
					<img src="https://imgs.search.brave.com/dDNBMN0pygl4ck0PaWKcE24t4c0PfXDaWpLGPQb-Udk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFQNVV5bGo1VUwu/anBn" alt="Mouse Óptico Z" />
					<h3>Mouse Óptico Z</h3>
					<p>RGB, 7200 DPI, USB</p>
					<span className="preco">R$ 129,00</span>
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
export default Perifericos;
