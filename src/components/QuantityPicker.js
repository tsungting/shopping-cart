import React, { Component } from 'react';

export class QuantityPicker extends Component {

  constructor(){
    super();
    this.state = {};
  }

  handleConfirmClicked = () => {
    if (this.state.quantity){
      this.props.handleQuantityUpdated(this.state.quantity);
    }
  }

  render() {
    return (
      <div>
        <span>Quantity</span>
        <input type="text" onChange={(event)=>{this.setState({quantity: event.target.value})}}></input>
        <button onClick={this.handleConfirmClicked} type="button">Confirm</button>
      </div>
    );
  }
}

