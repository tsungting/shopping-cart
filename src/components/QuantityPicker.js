import React, { Component } from 'react';

export class QuantityPicker extends Component {

  constructor(){
    super();
    this.state = {quantity: ''};
  }

  handleConfirmClicked = () => {
    if (this.state.quantity){
      this.props.handleQuantityUpdated(parseInt(this.state.quantity, 10));
      this.setState({quantity: ''});
    }
  }

  render() {
    return (
      <div>
        <span>Quantity</span>
        <input type="number" value={this.state.quantity} onChange={(event)=>{this.setState({quantity: event.target.value})}}></input>
        <button onClick={this.handleConfirmClicked} type="button">Confirm</button>
      </div>
    );
  }
}

