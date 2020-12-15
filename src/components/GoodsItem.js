import React, { Component } from "react";
import { connect } from "react-redux";
import { addGoodsToCart } from "../redux/actions";
import store from "../redux/store";
import "../styles.css";


class GoodsItem extends Component {

  // addCartHandler(id){
  //     store.dispatch(addGoodsToCart(id))
  // }

  render() {
    const { title, description, price, id } = this.props;
    console.log(this.props)
    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price*1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button onClick={()=>this.props.addGoodsToCart(id)} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }
}

const mapToDispatchProps = dispatch =>({
  addGoodsToCart: (id) => dispatch(addGoodsToCart(id)),
  name:'Vasya',
})

export default connect(null, mapToDispatchProps)(GoodsItem);