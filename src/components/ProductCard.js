import React, { Component } from 'react';

export class ProductCard extends Component {
    style = { "min-height" :"30vh"};
    render() {
        return (
            <div className="col col-3 flex flex-column m2 border" style={this.style}>
                <div className="h4" >
                    <span>{this.props.product.label}</span>
                </div>
                <div className="flex-auto p2">
                    <span>{this.props.product.description}</span>
                </div>
                <div className="p2">
                    <span>Cost : ${this.props.product.cost}</span>
                </div>
            </div>
        );
    }
}

