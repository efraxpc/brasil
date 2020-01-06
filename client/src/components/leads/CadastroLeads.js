import React, {Fragment, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Checkbox} from 'antd';
import SpecialSelect from '../specialSelect/SpecialSelect';
import VerticalStatusSelect from '../verticalStatusSelect/VerticalStatusSelect';
import HorizontalStatusSelect from '../horizontalStatusSelect/HorizontalStatusSelect';

import "./style.css";

import {Row, Col, Card, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatssap} from "@fortawesome/free-solid-svg-icons";

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const data = ['1° CONTATO', 'VISITA UNIDADE', 'OFICINA', 'OFERTA', 'MATRICULADO'];
const dataHorizontal = ['POUCO', 'MEDIO', 'MUITO'];




const CadastroLeads = ({}) => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <h3>IDENTIFICAÇÃO </h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>NOME POSSÍVEL ALUNO</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>IDADE POSSÍVEL ALUNO</Form.Label>
                                <Form.Control type="email"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>NOME DO RESPONSÁVEL</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>INFORMAÇÕES DE CONTATO</h3>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Row>
                        <Col>
                            <Row>
                                <Col md={9}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>TELEFONE</Form.Label>
                                        <Form.Control type="email" />
                                    </Form.Group>
                                </Col>
                                <Col md={3} className={'my-auto'}>
                                    <Checkbox onChange={onChange}>
                                        <i className="fab fa-whatsapp mt-2" style={{color:'#25d366',fontSize: 24}}></i>
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col md={5}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="email" />
                            </Form.Group>
                        </Col>
                        <Col md={2} className={'my-auto text-center'}>
                            @
                        </Col>
                        <Col md={5} className={'my-auto'}>
                            <SpecialSelect/>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
                    <Row className={'justify-content-center align-items-center'}>
                        <Col xs={12} md={10}>
                            <Card bg="light">
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <p>STATUS*</p>
                                            <VerticalStatusSelect items={data}/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className={'justify-content-center align-items-center mt-3'}>
                        <Col xs={12} md={10} >
                            <Card bg="light" >
                                <Card.Body className={'pt-3'}>
                                    <Row className={'my-auto'}>
                                        <Col md={4} className={'my-auto'}>
                                            <p className={'pt-3 mb-0'} style={{position:'relative'}}>NIVEL*</p>
                                            <p style={{fontSize:9, position:'relative'}}>de interesse</p>
                                        </Col>
                                        <Col md={8} className={'p-0 my-auto'}>
                                            <HorizontalStatusSelect items={dataHorizontal}/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Fragment>
    );
};


const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {}
)(withRouter(CadastroLeads));
