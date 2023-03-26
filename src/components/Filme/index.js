import './filme.css';

const filmes = [{
    "nome": "Kung fu panda",
    "duracao": "1H30",
    "foto": "Panda.jpg",
  },
  
  {
    "nome": "Como treinar o seu dragão",
    "duracao": "1H37",
    "foto": "Gadrao.jpg",
  },

  {
    "nome": "Shrek",
    "duracao": "1H45",
    "foto": "shrek.jpg",
  },

  {
    "nome": "Os sem floresta",
    "duracao": "1H45",
    "foto": "Floresta.jpg",
  },
]

export default function Filme() {
  return (
    <div className="container text-center">

      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome}</h5>

                <p>{filme.duracao}</p>

                  <a href={`/detalhes/${filme.nome}`}>
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}


