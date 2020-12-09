import React from "react";
import { Button, Card, Icon } from "semantic-ui-react";

const CardList = ({ cards }) => {
  return  cards.map( card => {
  return (
  
    <>
  <Card
    
  key={card.id}
  href='#card-example-link-card'
  header='Question'
  meta='Flash Card'
  description= {card.question}
  
  />
<Button icon='edit'  />
<Button icon='trash' />
<Button content="Show Answer"/>
</>
  
)},
)}
  


export default CardList;




