import React from 'react';

import PizzaLeft from '../assets/pizzaLeft.jpg';

import '../styles/Contato.css';


function Contato() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
            <div className="rightSide">
                <h1>Entre em contato</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Nome</label>
                    <input name="name" type="text" placeholder="Digite seu nome" required/>

                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" placeholder="Digite seu email" required/>

                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="" cols="30" rows="6" placeholder="Digite sua mensagem" required></textarea>

                    <button type="submit">Enviar mensagem</button>

                </form>
            </div>
        </div>
    );
}

export default Contato;


