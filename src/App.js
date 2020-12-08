import React from "react";
import logo from './logo.svg';
import './App.css';
import { Container, Header, } from "semantic-ui-react"; 
import CardList from './CardList';
import CardForm from './CardForm';



class App extends React.Component {
  
  state = {
    cards: [
      { id: 1, question: "Where did Elvis die?", answer: "on the toilet"},
      { id: 2, question: "What's the capital of Kansas?", answer: "Topeka"},
      { id: 3, question: "Which serial killer turned his victims into zombies?", answer: "Jeffrey Dahmer"},
      { id: 4, question: "which serial killer was the inspiration for silent of the lambs?", answer: "Ed Gein"},
      { id: 5, question: "What's round on both end and high in the middle?", answer: "Ohio"},




    ],
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  render() {
    return (
      <Container>
        <Header as= "h1">Flash Cards</Header>
        <CardForm/>
        <CardList cards={this.state.cards} />

      </Container>
    );
  }
}

export default App;