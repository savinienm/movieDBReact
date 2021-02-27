import React from "react";
import SearchBar from "../components/search-bar";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark shadow">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href=""
        >
          <img src="../img/1200px-Logo_Netflix.png" alt="netflix" width="100rem" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex align-items-center justify-content-between"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav" id="menu1">
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://portefolio.savinien-monteil.labo-ve.fr/moviedb/index.html"
              >
                <strong>Accueil</strong>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://portefolio.savinien-monteil.labo-ve.fr/moviedb/series.html"
              >
                <strong>Séries</strong>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="http://portefolio.savinien-monteil.labo-ve.fr/moviedb/films.html"
              >
                <strong>Films</strong>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nohover">Nouveautés les plus regardées</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nohover">Ma liste</a>
            </li>
          </ul>
          <div class="row d-flex align-items-center" id="menu2">
            <i class="fas fa-search submit" id="sub"></i>
            <SearchBar callback={this.onClickSearch.bind(this)}/>
            <p class="my-auto ml-3">DIRECT</p>
            <p class="my-auto ml-3">JEUNESSE</p>
            <img class="ml-3" src="../img/cadeau.png" alt="" width="30px" />
            <img class="ml-3" src="../img/cloche.png" alt="" width="30px" />
            <img
              class="ml-3"
              src="../img/Screenshot_2020-10-15 NetflixBojack.png"
              alt=""
              width="40px"
            />
            <img class="ml-3" src="../img/developper.png" alt="" width="20px" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
