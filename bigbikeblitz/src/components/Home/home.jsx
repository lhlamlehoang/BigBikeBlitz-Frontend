import React from "react";
import '../../assets/CSS/home.css'
import { Base_URL } from "../../api/instance";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import UseCookie from "../../hooks/useCookie";
import Header from '../header'; 
import Footer from '../footer'; 
import { setListBike } from "../../redux/slice/bike";


const Home = () => {

  const [bikeList, setBikeList] = useState([]);
  const [bikePage, setBikePage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreBikes, setHasMoreBikes] = useState(false);
  const dispatch = useDispatch();


  const getAllBike = async (bikePage) => {
    try {
      const response = await axios.get(`${Base_URL}/bike/getAll?pageNumber=${bikePage}`);
      const { bikeList, currentPage, totalPages } = response.data;
      console.log("bikeList Response", bikeList, currentPage, totalPages);
      setBikeList(bikeList);
      setTotalPages(totalPages);
      if (currentPage < totalPages) {
        setHasMoreBikes(true);
      } else if (currentPage >= totalPages) {
        setHasMoreBikes(false);
      }
      return response.data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleLoadNext = () => {
    if(hasMoreBikes === true){
    setTimeout(() => {
      setBikePage((prevPage) => prevPage + 1);
      setCurrentPage(currentPage + 1);  
      window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: "smooth", // Smooth scroll behavior
      });
    }, 500); // Wait for 0.5 seconds
    }
  };

  const handleLoadPrev = () => {
    if(currentPage !== 1){
      setTimeout(() => {
        setBikePage((prevPage) => prevPage - 1);
        setCurrentPage(currentPage - 1);
        window.scrollTo({
          top: 0, // Scroll to the top of the page
          behavior: "smooth", // Smooth scroll behavior
        });
      }, 500); // Wait for 0.5 seconds

      
      }
  }; 

  useEffect(() => {
    getAllBike(bikePage).then((response) => {
      const { bikeList } = response;
        setBikeList(bikeList);
        dispatch(setListBike(bikeList));
    });
  }, [bikePage]);
  if (!bikeList) return null;
    
  return (
    <div className="home-page">
      <Header />
      <div className="grid-container">
        {bikeList.map(bike => (
          <div className="grid-item" key={bike.bike.bikeId}>
            <img className="img-bike" src={bike.bike.photo}/>
            <div className="bike-name">{bike.bike.bikeName}</div>
            <div><span className="bike-info">Capacity:</span> {bike.bike.cc}cc</div>
            <div><span className="bike-info">Company:</span> {bike.bike.company}</div>
            <div><span className="bike-info">Date:</span> {bike.bike.date}</div>
            <div><span className="bike-info">Price:</span> {bike.bike.price}.00$</div>
            <div><span className="bike-info">Author:</span> {bike.user.userName}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => handleLoadPrev()}
          className="btn-load-prev"
        >
          Previous
        </button>
        {currentPage}
        <button
          onClick={() => handleLoadNext()}
          className="btn-load-next"
        >
          Next
        </button>
      </div>        
      <Footer/>
    </div>
  );
};

export default Home;