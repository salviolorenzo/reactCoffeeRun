import React, { Component } from "react";
import CoffeeForm from "./CoffeeForm";
import Output from "./Output";

class CoffeeRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        coffee: "",
        emailAddress: "",
        flavor: "",
        size: "",
        strength: ""
      }
    };
  }

  _handleCoffee(event) {
    console.log(event.target.value);
    this.setState({
      order: {
        ...this.state.order,
        coffee: event.target.value
      }
    });
  }

  _handleEmail(event) {
    console.log(event.target.value);
    this.setState({
      order: {
        ...this.state.order,
        emailAddress: event.target.value
      }
    });
  }

  _handleFlavor(event) {
    console.log(event.target.value);
    this.setState({
      order: {
        ...this.state.order,
        flavor: event.target.value
      }
    });
  }

  _handleSize(event) {
    console.log(event.target.value);
    this.setState({
      order: {
        ...this.state.order,
        size: event.target.value
      }
    });
  }

  _handleStrength(event) {
    console.log(event.target.value);
    this.setState({
      order: {
        ...this.state.order,
        strength: event.target.value
      }
    });
  }

  _onSubmit(event) {
    event.preventDefault();
    let newOrder = {
      coffee: event.target.coffee.value,
      emailAddress: event.target.emailAddress.value,
      flavor: event.target.flavor.value,
      size: event.target.size.value,
      strength: event.target.strength.value
    };
    this.setState({
      order: newOrder
    });
    fetch(`https://dc-coffeerun.herokuapp.com/api/coffeeOrders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newOrder)
    });
    console.log(newOrder);
  }

  componentDidMount() {
    fetch(`https://dc-coffeerun.herokuapp.com/api/coffeeOrders`)
      .then(r => r.json())
      .then(console.log);
  }

  render() {
    return (
      <div className="coffeerun">
        <h1>Coffee Run</h1>
        <CoffeeForm
          handleCoffee={this._handleCoffee.bind(this)}
          handleEmail={this._handleEmail.bind(this)}
          handleFlavor={this._handleFlavor.bind(this)}
          handleSize={this._handleSize.bind(this)}
          handleStrength={this._handleStrength.bind(this)}
          onSubmit={this._onSubmit.bind(this)}
          coffee={this.state.order.coffee}
          email={this.state.order.emailAddress}
          flavor={this.state.order.flavor}
          size={this.state.order.size}
          strength={this.state.order.strength}
        />
        <Output
          coffee={this.state.order.coffee}
          email={this.state.order.emailAddress}
          flavor={this.state.order.flavor}
          size={this.state.order.size}
          strength={this.state.order.strength}
        />
      </div>
    );
  }
}

export default CoffeeRun;
