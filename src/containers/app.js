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

    receiveCallBack(movie){
        this.setState({currentMovie:movie}, function(){
            this.applyVideoToCurrentMovie();
        })
    }

    render() {
        const renderVideoList = () => {
            if(this.state.movieList.length>=5){
                return <VideoList movieList={this.state.movieList} callback={this.receiveCallBack.bind(this)}/>
            }
        }
        return (<div>
        <div className="search_bar">
            <SearchBar/>
        </div>
        <div className="row">
            <div className="col-md-8">
                <Video videoId={this.state.currentMovie.videoId}/>
                <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
            </div>
            <div className="col-md-4">
                {renderVideoList()}
            </div>
        </div>
        </div>)
    }
}

export default App;
