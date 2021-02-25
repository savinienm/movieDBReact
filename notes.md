<!-- URL TheMovieDB

Les films les plus populaires du moment en français.

https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=votreClé

Recommendation de films pour un id de film particulier en français

https://api.themoviedb.org/3/movie/idDeFilm/recommendations?api_key=votreClé&language=fr&include_adult=false

Rechercher un film par son titre en français

https://api.themoviedb.org/3/search/movie?api_key=votreClé&query=Un+Titre+De+film&language=fr&include_adult=false

Rechercher des url de video pour un id de film en particulier (en anglais)

Note : si vous appliquez un filtre avec language=fr vous aurez malheureusement moins de résultats qu'en anglais.

https://api.themoviedb.org/3/movie/[id]?api_key=votreClé&append_to_response=videos&include_adult=false

Définition des constantes

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=[votreClé]"
MON API 153bac550dbfc9bda1b2f5ef2f99a808 -->