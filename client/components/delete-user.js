import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../store/user'

export const DeleteUser = (props) => {
    const user = props.user
    return (
        <div>
            {
                user.isAdmin
                    ? (
                        <div>
                            <form onSubmit={(event) => props.handleSubmit(event)}>
                                <fieldset>
                                    <legend>Delete User</legend>
                                    <div>
                                        <label>Email</label>
                                        <input name="email" type="text" />
                                    </div>
                                    <div>
                                        <label>First Name</label>
                                        <input name="firstName" type="text" />
                                    </div>
                                    <div>
                                        <label>Last Name</label>
                                        <input name="lastName" type="text" />
                                    </div>
                                    <button type="submit">Delete User</button>
                                </fieldset>
                            </form>
                        </div>
                    )
                    : <h3>404 Error</h3>
            }
        </div>
    )
}

class Loader extends React.Component {
    render() {
        const Render = this.props.Render
        return <Render handleSubmit={this.props.handleSubmit} user={this.props.user} />
    }
}

const mapState = (state) => {
    return {
        user: state.user.loggedInUser,
        Render: DeleteUser
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleSubmit(event) {
            event.preventDefault();
            let user = {
                email: event.target.email.value,
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value
            }
            dispatch(deleteUser(user))
        }
    }
}

export default connect(mapState, mapDispatch)(Loader)