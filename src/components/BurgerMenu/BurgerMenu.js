import React from 'react';

const BurgerMenu = props => {
    return (
        <div className="menu">
            <p>Current price: {props.state.total} soms</p>

            <ul className="list">
                <li>
                    <span>Salad</span>
                    <button className={props.state.Salad > 0 ? "push_button red" : "push_button red disabled"} onClick={props.lessSalad}>LESS</button>
                    <button className="push_button blue" onClick={props.moreSalad}>MORE</button>
                </li>

                <li>
                    <span>Bacon</span>
                    <button className={props.state.Bacon > 0 ? "push_button red" : "push_button red disabled"} onClick={props.lessBacon}>LESS</button>
                    <button className="push_button blue" onClick={props.moreBacon}>MORE</button>
                </li>

                <li>
                    <span>Cheese</span>
                    <button className={props.state.Cheese > 0 ? "push_button red" : "push_button red disabled"} onClick={props.lessCheese}>LESS</button>
                    <button className="push_button blue" onClick={props.moreCheese}>MORE</button>
                </li>

                <li>
                    <span>Meat</span>
                    <button className={props.state.Meat > 0 ? "push_button red" : "push_button red disabled"} onClick={props.lessMeat}>LESS</button>
                    <button className="push_button blue" onClick={props.moreMeat}>MORE</button>
                </li>
            </ul>
        </div>
    )
};

export default BurgerMenu;
