import React from "react";

function CoffeeForm(props) {
  return (
    <form className="coffeeForm" onSubmit={props.onSubmit}>
      <label>Coffee:</label>
      <input
        type="text"
        value={props.coffee}
        onChange={props.handleCoffee}
        name="coffee"
      />
      <label>Email Address</label>
      <input
        type="email"
        value={props.emailAddress}
        onChange={props.handleEmail}
        name="emailAddress"
      />
      <label>Flavor</label>
      <input
        type="text"
        value={props.flavor}
        onChange={props.handleFlavor}
        name="flavor"
      />
      <label>Size</label>
      <input
        type="text"
        value={props.size}
        onChange={props.handleSize}
        name="size"
      />
      <label>Strength</label>
      <input
        type="number"
        value={props.strength}
        onChange={props.handleStrength}
        name="strength"
      />
      <input type="submit" />
    </form>
  );
}

export default CoffeeForm;
