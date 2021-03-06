import React, {Component} from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import VideoDetail from '../components/video-detail'
import Video from '../components/video'
import axios from 'axios'

// Point d'entrée de l'API
const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&apprend_to_response=images"
const API_KEY = "api_key=153bac550dbfc9bda1b2f5ef2f99a808"
const SEARCH_URL = "search/movie?language=fr&include_adult=false"
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {movieList:{}, currentMovie:{}}
    }
    componentWillMount(){
        // Pour plus de clarté la fonction est définie plus bas
        this.initMovies()
    }

    initMovies(){
        // .then = au moment où la requête est résolue
        // response c'est la réponse à la requête de axios
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
            // la fonction anonyme après le data.result sert de callback, pour être sûr d'effectuer la fonction applyVideo une fois que la requête (async) axios est faite
            this.setState({movieList:response.data.results.slice(1,6), currentMovie:response.data.results[0]}, function(){
                this.applyVideoToCurrentMovie();
            })
        }.bind(this));
    }

    applyVideoToCurrentMovie(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){
            if(response.data.videos.results[0] && response.data.videos.results[0].key){ 
                const youtube_key =response.data.videos.results[0].key;
                let currentMovieWithVideo = this.state.currentMovie;
                currentMovieWithVideo.videoId = youtube_key;
                this.setState({currentMovie:currentMovieWithVideo});
           }
        }.bind(this));
    }

    onClickSearch(searchText){
        if(searchText){
            axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response){
                //vérifie que quelque chose est tapé dans la barre de recherche sinon ne fait rien
                if(response.data && response.data.results[0]){
                    // Vérifie que ce qui est écrit dans la barre de recherche est bien différent de ce qui est déjà affiché (par l'ID du film)
                    if(response.data.results[0].id != this.state.currentMovie.id){
                        this.setState({currentMovie: response.data.results[0]}, () => {
                            this.applyVideoToCurrentMovie();
                            this.setRecommendation();
                        })
                    }
                }
            }.bind(this));
        }
    }

    onClickListItem(movie){
        this.setState({currentMovie:movie}, function(){
            this.applyVideoToCurrentMovie();
            this.setRecommendation();
        })
    }

    setRecommendation() {
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function(response){
            this.setState({movieList:response.data.results.slice(0,5)}, function(){
                this.applyVideoToCurrentMovie();
            })
        }.bind(this));

    }

    render() {
        const renderVideoList = () => {
            if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList} callback={this.onClickListItem.bind(this)}/>
            }
        }
        return (<div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark shadow">
            <a className="navbar-brand" href="#">
                <img id="netflix" src="src\img\1200px-Logo_Netflix.png" alt="netflix" width="100rem" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link disabled" href="#">Accueil <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Séries</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Films</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Nouveautés les plus regardées</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Ma liste</a>
                    </li>
                </ul>
                <div className="row d-flex align-items-center">
                    <i className="fas fa-search submit" id="sub"></i>
                    <SearchBar callback={this.onClickSearch.bind(this)}/>
                    <p className="my-auto ml-3">DIRECT</p>
                    <p className="my-auto ml-3">JEUNESSE</p>
                    <img className="ml-3" src="src\img\cadeau.png" alt="" width="30px" />
                    <img className="ml-3" src="src\img\cloche.png" alt="" width="30px" />
                    <img
                    className="ml-3"
                    src="src\img\Screenshot_2020-10-15 NetflixBojack.png"
                    alt=""
                    width="40px"
                    />
                    <img className="ml-3" src="src\img\developper.png" alt="" width="20px" />
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Video videoId={this.state.currentMovie.videoId}/>
                </div>
            </div>
            <div className="row d-flex align-items-center justify-content-between my-3">
                <div className="col col-md-8">
                    <VideoDetail title={this.state.currentMovie.title} vote={this.state.currentMovie.vote_average} count={this.state.currentMovie.vote_count} description={this.state.currentMovie.overview} date={this.state.currentMovie.release_date}/>
                </div>
                <div className="col col-md-4 d-flex align-items-center justify-content-end">
                    <img className="media-object img-rounded mb-auto" height="300px" src={`${IMAGE_BASE_URL}${this.state.currentMovie.poster_path}`}/>
                </div>
            </div>
        </div>
        <div className="container">
                <h3>Si vous aimez <strong>{this.state.currentMovie.title}</strong>, peut-être que ces films vous intéresseront... </h3>
                {renderVideoList()}
        </div>
        </div>)
    }
}

export default App;
