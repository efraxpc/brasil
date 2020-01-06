import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';
import {Layout, Menu, Icon} from 'antd';

const {Header} = Layout;

function FilledMenu(props) {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            //defaultSelectedKeys={['2']}
            style={{lineHeight: '64px'}}
        >
                <Menu.Item key="1"> <Link to='/leads'>Leads</Link></Menu.Item>
                <Menu.Item key="2" style={{float: "right"}}>
                    <a onClick={props.logout} href='#!'>
                        <i className='fas fa-sign-out-alt'/>{' '}
                        <span className='hide-sm'>Sair</span>
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

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

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

    return (
        <Header className="header">
            <div className="logo"/>
            <Menu
                theme="light"
                mode="horizontal"
                //defaultSelectedKeys={['2']}
                style={{lineHeight: '64px'}}
            >
                {!loading && isAuthenticated ? <FilledMenu logout={logout}/> : <EmptyMenu/>}

            </Menu>
        </Header>
    );
};


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
)(Navbar);
