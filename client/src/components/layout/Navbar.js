import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import {Layout, Menu, Icon} from 'antd';

import "./style.css";
import {createProfile, getCurrentProfile} from "../../actions/profile";

const {Header} = Layout;

function FilledMenu(props) {
    return (
        <Menu
            mode="horizontal"
            className={'orange'}
            //defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
        >
            <Menu.Item key="1"> <Link to='/leads' style={{color:'#fff'}}>Leads</Link></Menu.Item>
            <Menu.Item key="2" style={{float: "right"}}>
                <a onClick={props.logout} href='#!' style={{color:'#fff'}}>
                    <i className='fas fa-sign-out-alt'/>{' '}
                    <span className='hide-sm' >Sair</span>
                </a>
            </Menu.Item>

        </Menu>
    )
}

function EmptyMenu() {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            //defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
        >
        </Menu>
    )
}


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentLocation = this.props.location.pathname
        const guestLinks = (
            <ul>
                <li>
                    <Link to='/profiles'>Developers</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        );
        switch (currentLocation) {
            case '/':
            case '/login':
            case '/register':
                return null;
                break;
            default:
                return (
                    <Header className="header" className={'orange'}>
                        <div className="logo"/>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            //defaultSelectedKeys={['2']}

                            style={{lineHeight: '64px'}}
                        >
                            {!this.props.auth.loading && this.props.auth.isAuthenticated ?
                                <FilledMenu logout={this.props.logout}/> : <EmptyMenu/>}

                        </Menu>
                    </Header>
                );
        }
    };
}


Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});


export default connect(
    mapStateToProps,
    {logout}
)(
    withRouter(Navbar)
);
