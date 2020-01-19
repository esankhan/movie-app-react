import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import Spinner from "../elements/Spinner/Spinner";
import "./Home.css";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
     const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    //const endpoint = "http://www.omdbapi.com/?apikey=9079b120&s=%27a%27";
    fetchItems(endpoint);
  }, []);

  const searchItems = searchTerm=>{
    let endpoint=''
    setMovie([]);
    setLoading(true)
  searchTerm=searchTerm

  if (searchTerm='')
  {
     endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  }else {
    endpoint=`${API_URL}search/movie/?api_key=${API_KEY}&language=en-US&query=${searchTerm}`
  }

  fetchItems(endpoint);
  }

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);
    if (searchTerm === "") {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage +
        1}`;
    } else {
      endpoint = `${API_URL}search/company?api_key=${API_KEY}&query=${searchTerm}&page=1`;
    }

    fetchItems(endpoint);
  };

  const fetchItems = async endpoint => {
    const data = await axios.get(endpoint);

    console.log(data.data);

    setMovie(data.data.results);
    setHeroImage(heroImage || data.data.results[0]);

    setCurrentPage(data.data.page);
    setTotalPages(data.data.total_pages);
    setLoading(false);
  };

  //console.log(heroImage);
 
  return (
    <div className='rmdb-home'>
    {heroImage ? <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      ></HeroImage>:null}
      <SearchBar></SearchBar>
      <FourColGrid></FourColGrid>
      <Spinner></Spinner>
      <LoadMoreBtn></LoadMoreBtn>
    </div>
  );
};

export default Home;
