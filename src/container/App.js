import React, {Component} from 'react';
import BurgerMenu from '../components/BurgerMenu/BurgerMenu';
import BurgerTop from '../components/BurgerTop/BurgerTop';
import BurgerBottom from '../components/BurgerBottom/BurgerBottom';
import Salad from '../components/ingredients/Salad';
import Bacon from '../components/ingredients/Bacon';
import Cheese from '../components/ingredients/Cheese';
import Meat from '../components/ingredients/Meat';
import './App.css';

class App extends Component {
    state = {
        Salad: 0,
        Bacon: 0,
        Cheese: 0,
        Meat: 0,
        total: 20
    };

    addSalad = () => {
        const state = {...this.state};
        state.Salad++;
        state.total += 5;

        this.setState(state);
    };

    reduceSalad = () => {
        const state = {...this.state};
        state.Salad--;
        state.total -= 5;
        this.setState(state);
    };

    addBacon = () => {
        const state = {...this.state};
        state.Bacon++;
        state.total += 30;
        this.setState(state);
    };

    reduceBacon = () => {
        const state = {...this.state};
        state.Bacon--;
        state.total -= 30;
        this.setState(state);
    };

    addCheese = () => {
        const state = {...this.state};
        state.Cheese++;
        state.total += 20;
        this.setState(state);
    };

    reduceCheese = () => {
        const state = {...this.state};
        state.Cheese--;
        state.total -= 20;
        this.setState(state);
    };

    addMeat = () => {
        const state = {...this.state};
        state.Meat++;
        state.total += 50;
        this.setState(state);
    };

    reduceMeat = () => {
        const state = {...this.state};
        state.Meat--;
        state.total -= 50;
        this.setState(state);
    };

    render() {
        const salad = [];

        for (let i = 0; i < this.state.Salad; i++) {
            salad.push(<Salad key={i}/>)
        }

        const bacon = [];

        for (let i = 0; i < this.state.Bacon; i++) {
            bacon.push(<Bacon key={i}/>)
        }

        const cheese = [];

        for (let i = 0; i < this.state.Cheese; i++) {
            cheese.push(<Cheese key={i}/>)
        }

        const meat = [];

        for (let i = 0; i < this.state.Meat; i++) {
            meat.push(<Meat key={i}/>)
        }

        return (
            <div className="App">
                <div className="Burger">
                    <BurgerTop/>
                    {salad}
                    {bacon}
                    {cheese}
                    {meat}
                    <BurgerBottom/>
                </div>
                <BurgerMenu
                    state={this.state}
                    moreSalad={this.addSalad}
                    lessSalad={this.reduceSalad}
                    moreBacon={this.addBacon}
                    lessBacon={this.reduceBacon}
                    moreCheese={this.addCheese}
                    lessCheese={this.reduceCheese}
                    moreMeat={this.addMeat}
                    lessMeat={this.reduceMeat}
                />
            </div>
        );
    }
}

export default App;
