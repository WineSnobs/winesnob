import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchOrder } from '../store'

export class OrderHistory extends React.Component {
  componentDidMount() {
    this.props.fetchOrder();
  }
  render() {
    const myOrders = this.props.ordersOnProps;
    if (!this.props.ordersOnProps) {
      return <h1>You have no orders</h1>
    }
    else {
      return (
        <div>
          <h3>Order History</h3>
          <div>
            {
              myOrders && myOrders.map(order => {
                return (
                  <div key={order.id}>
                    <h5>Date Ordered: {order.updatedAt}</h5>
                    <h6>Status: {order.status}</h6>
                    <Link to={`/order-detail/${order.id}`}>Order Details</Link>
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
        ordersOnProps: state.order.orders,
        userOnProps: state.user.loggedInUser.id
    }
}


const mapDispatch = (dispatch) => (
  {
    fetchOrder: () => {
      dispatch(fetchOrder());
    }
  });


export default connect(mapState, mapDispatch)(OrderHistory)
