import { GET_FILM_DETAIL, GET_LIST_FILM } from "../actions/type/FilmType";
const stateDefault = {
  detail: [
    {
      adult: false,
      backdrop_path: "/2W1MfDpE3bH1hLAiFAUBWe4nBCP.jpg",
      belongs_to_collection: {},
      budget: 73000000,
      genres: [],
      homepage: "",
      id: 330,
      imdb_id: "tt0119567",
      original_language: "en",
      original_title: "The Lost World: Jurassic Park",
      overview:
        "Four years after Jurassic Park's genetically bred dinosaurs ran amok, multimillionaire John Hammond shocks chaos theorist Ian Malcolm by revealing that he has been breeding more beasties at a secret location. Malcolm, his paleontologist ladylove and a wildlife videographer join an expedition to document the lethal lizards' natural behavior in this action-packed thriller.",
      popularity: 2.162,
      poster_path: "/jElpCJkSaRPYwIMwZY28gOKV7BK.jpg",
      production_companies: [],
      production_countries: [],
      release_date: "1997-05-23",
      revenue: 618638999,
      runtime: 129,
      spoken_languages: [],
      status: "Released",
      tagline: "Something has survived.",
      title: "The Lost World: Jurassic Park",
      video: false,
      vote_average: 6.5,
      vote_count: 6752,
    },
  ],
};

export const filmDetailReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_FILM_DETAIL: {
      state.detail = action.detail;
      // state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
