import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Row, Col } from 'react-bootstrap';
import backgroundImage from './fundo-metodo-min.png'
import logo from './logo.png'

import "./style.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData

  const onChange = e =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
        <Row  style={{backgroundImage:`url(${backgroundImage})`,  height: '100%', width: '100%', margin:0}}>
          <Col>

          </Col>
          <Col>
            <Row>
              <Col>
                <h1 className='large' style={{color:'#41A7FF'}}>Entre</h1>
                <p className='lead'>
                  <i className='fas fa-user' /> Olá! Digite o seu e-mail
                </p>
                <form className='form' onSubmit={e => onSubmit(e)}>
                  <div className='form-group'>
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                  </div>
                  <div className='form-group'>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                  </div>
                  <input type='submit' className='btn btn-primary' value='Continuar' />
                </form>
              </Col>
            </Row>
            <Row className={'mt-logo-login'}>
              <Col>
                <img src={logo} alt="logo"/>
              </Col>
            </Row>
          </Col>

        </Row>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { login }
)(Login);
