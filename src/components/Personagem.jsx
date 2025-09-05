import './Personagem.css';

function Personagem({ personagem, ultimoEpisodio }) {
  return (
    <div>
      <h1>Personagem</h1>
      <img className="personagem-img" src={personagem.Imagem} alt={personagem.nome} />
      <p>Nome: {personagem.Nome}</p>
      <p>Status: {personagem.Status}</p>
      <p>Espécie: {personagem.Especies}</p>
      <p>Gênero: {personagem.Genero}</p>
      <p>Último episódio: {ultimoEpisodio}</p>
    </div>
  );
}

export default Personagem;
