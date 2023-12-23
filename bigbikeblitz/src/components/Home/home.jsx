import React from "react";
import '../../assets/CSS/home.css'
import { Base_URL } from "../../api/instance";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import UseCookie from "../../hooks/useCookie";

const Home = () => {

    const [bikeList, setBikeList] = useState([]);

    const getAllBike = async () => {
      try {
        const response = await axios.get(`${Base_URL}/bike/getAll`);
        setBikeList(response.data.value);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    useEffect(() => {
      getAllBike();
    }, []);

  return (
    <div className="home-page">
    <h1>Big Bike Blitz</h1>
    <div className="grid-container">
      {bikeList.map(bike => (
        <div className="grid-item" key={bike.bike.bikeId}>
          <img className="img-bike" src={bike.bike.photo}/>
          <div className="bike-name">{bike.bike.bikeName}</div>
          <div><span>Capacity:</span> {bike.bike.cc}cc</div>
          <div><span>Company:</span> {bike.bike.company}</div>
          <div><span>Date:</span> {bike.bike.date}</div>
          <div><span>Price:</span> {bike.bike.price}.00$</div>
          <div><span>Author:</span> {bike.user.userName}</div>

        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;