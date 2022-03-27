import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div class="container">
                <div class="card">
                    <img src="https://avatars.githubusercontent.com/u/9113159?v=4" alt="avatar" />
                    <button class="cybr-btn">
                Agustin Bereciartua<span aria-hidden>_</span>
                    <span aria-hidden class="cybr-btn__glitch">Agustin Bereciartua</span>
                    <span aria-hidden class="cybr-btn__tag"></span>
                </button>
                    <h3>Software engineer</h3>
                    <p>Senior software developer</p>
                    <div class="socialsbut">

                        <a href="https://www.linkedin.com/in/agustin-bereciartua" target="_blank" class="btn"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/galenzo17" target="_blank" class="btn"><i class="fab fa-github"></i></a>

                    </div>
                </div>
                
            </div>

        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };