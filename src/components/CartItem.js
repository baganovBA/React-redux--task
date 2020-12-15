import React, { Component } from "react";
import "../styles.css";
import {connect} from 'react-redux'
import { removeGoodfromCart } from "../redux/actions";

class CartItem extends Component {
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={()=>{this.props.removeGoodfromCart(id)}}>del</button>
      </div>
    );
  }
}

const mapToDispatchProps = dispatch =>({
  removeGoodfromCart: (id) => dispatch(removeGoodfromCart(id))
})

export default connect(null,mapToDispatchProps)(CartItem);