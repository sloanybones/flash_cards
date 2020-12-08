import React from "react";
import { Card, Button } from "semantic-ui-react";

const CardList = ({ cards }) => {
  return  cards.map( card => {
  return (
  <Card
  key={card.id}
  href='#card-example-link-card'
  header='Question'
  meta='Flash Card'
  description= {card.question}

  />
 
  )}
  
  )};


export default CardList;




