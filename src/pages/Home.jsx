import React from 'react'
import { Link } from 'react-router-dom';

import BannerImage from '../assets/pizza.jpeg';

import '../styles/Home.css'


function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Pedro's Pizzeria</h1>
                <p>A MELHOR PIZZA DA CIDADE</p>
                <Link to="/menu">
                    <button>FAÇA SEU PEDIDO</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
