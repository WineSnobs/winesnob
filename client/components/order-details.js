import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSingleOrder } from '../store'

class OrderDetails extends React.Component {
  componentDidMount() {
    const orderId = Number(this.props.match.params.orderId)
    this.props.fetchSingleOrder(orderId);
  }
  render() {
    if (!this.props.orderOnProps.lists) {
      return <h1>Loading...</h1>
    }
    else {
      return (
        <div>
          <h1>Order Details</h1>
          <div>
            {
              this.props.orderOnProps.lists && this.props.orderOnProps.lists.map(list => {
                return (
                  <div key={list.id}>
                    <img src={list.wine.img} />
                    <Link to={`/winelist/${list.wine.id}`}>{list.wine.name}</Link>
                    <h5>Wine Name: {list.wine.name}</h5>
                    <h5>Vintage: {list.wine.vintage}</h5>
                    <h5>Varietal: {list.wine.varietal}</h5>
                    <h5>Size: {list.wine.size}</h5>
                    <h5>Bottles Ordered: {list.quantity}</h5>
                    <h5>Price: {list.wine.price}</h5>
                    <Link to={`/reviews/${list.wine.id}`}>Write a Review for {list.wine.name}</Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
}


const mapState = (state) => {
  return {
    orderOnProps: state.order.order
  }
}


const mapDispatch = (dispatch) => (
  {
    fetchSingleOrder: (id) => {
      dispatch(fetchSingleOrder(id));
    }
  });


export default connect(mapState, mapDispatch)(OrderDetails)
