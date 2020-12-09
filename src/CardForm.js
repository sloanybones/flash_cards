import React from "react";
import { Button, Form  } from "semantic-ui-react";

class CardForm extends React.Component {
  state = { question: "", answer: ""};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCardToState(this.state);
    this.setState({ question: "", answer: "",});
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }; 

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Question" 
            placeholder="Your Question" 
            name="question" 
            value={this.state.question} 
            onChange={this.handleChange}
          />
          <Form.Input 
            fluid 
            label="Answer" 
            placeholder="Your Answer" 
            name="answer" 
            value={this.state.answer} 
            onChange={this.handleChange}
          />
          <Form.Button color="grey">Add Card{this.handleSubmit}</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

export default CardForm;