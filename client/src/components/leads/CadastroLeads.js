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
import { Input, Select } from 'antd';
const { Option } = Select;


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
                    <label style={{width:'100%'}}>
                        NOME POSSÍVEL ALUNO
                        <Input size="large" placeholder="" />
                    </label>
                </Col>
                <Col md={4}>
                    <label style={{width:'100%'}}>
                        NOME IDADE POSSÍVEL ALUNO
                        <Input size="large" placeholder="" />
                    </label>
                </Col>
                <Col md={4}>
                    <label style={{width:'100%'}}>
                        NOME NOME DO RESPONSÁVEL
                        <Input size="large" placeholder="" />
                    </label>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <Row>
                        <Col>
                            <h3>INFORMAÇÕES DE CONTATO</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col md={10}>
                                    <label style={{width:'100%'}}>
                                        TELEFONE
                                        <Input size="large" placeholder="" />
                                    </label>
                                </Col>
                                <Col md={2} className={'my-auto'}>
                                    <Checkbox onChange={onChange}>
                                        <i className="fab fa-whatsapp mt-2"
                                           style={{color: '#25d366', fontSize: 24}}></i>
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={5}>
                                    <label>
                                        EMAIL
                                        <Input size="large" placeholder="" />
                                    </label>
                                </Col>
                                <Col md={2} className={'my-auto text-center'}>
                                    @
                                </Col>
                                <Col md={5} className={'my-auto'}>
                                    <SpecialSelect
                                        data={['GMAIL.COM', 'OUTLOOK.COM', 'YAHOO.COM', 'ZOHO.COM']}
                                        placeholder={'Escolha um dominio'}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col style={{zIndex: 3}}>
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
                        <Col xs={12} md={10}>
                            <Card bg="light">
                                <Card.Body className={'pt-3'}>
                                    <Row className={'my-auto'}>
                                        <Col md={4} className={'my-auto'}>
                                            <p className={'pt-3 mb-0'} style={{position: 'relative'}}>NIVEL*</p>
                                            <p style={{fontSize: 9, position: 'relative'}}>de interesse</p>
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
            <Row className={'row-adicional-information'}>
                <Col>
                    <Row>
                        <Col>
                            <h3>INFORMAÇÕES COMPLEMENTARES</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col>
                                    ESCOLA
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <SpecialSelect
                                        data={[
                                        'ESCOLA ADVENTISTA DO BAIRRO',
                                        'ESCOLA SAGRADO CORACAO DE MARIA',
                                        'COLÉGIO OBJETIVO',
                                        'MAPLE BEAR']}

                                        placeholder={'Escolha uma escola'}
                                    />
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Row>
                                <Col>
                                    TURNO
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Select style={{width:'100%'}}>
                                        <Option value="manha">MANHA</Option>
                                        <Option value="tarde">TARDE</Option>
                                        <Option value="noite">NOITE</Option>
                                        <Option value="integral">INTEGRAL</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'leads-redes'}>
                <Col>
                    <Row>
                        <Col>
                            <h3>LEADS REDES</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <label style={{width:'100%'}}>
                                NOME DO PERFIL
                                <Input size="large" placeholder="" />
                            </label>
                        </Col>
                        <Col md={1} className={'my-auto'}>
                            <Checkbox onChange={onChange}>
                                <i className="fab fa-whatsapp mt-2"
                                   style={{color: '#25d366', fontSize: 24}}></i>
                            </Checkbox>
                        </Col>
                        <Col md={1} className={'my-auto'}>
                            <Checkbox onChange={onChange}>
                                <i className="fab fa-facebook mt-2"
                                   style={{color: '#3b5998', fontSize: 24}}></i>
                            </Checkbox>
                        </Col>
                        <Col md={1} className={'my-auto'}>
                            <Checkbox onChange={onChange}>
                                <i className="fab fa-instagram mt-2"
                                   style={{color: '#cd486b', fontSize: 24}}></i>
                            </Checkbox>
                        </Col>
                        <Col md={1} className={'my-auto'}>
                            <Checkbox onChange={onChange}>
                                <i className="fas fa-globe mt-2"
                                   style={{color: '#000', fontSize: 24}}></i>
                            </Checkbox>
                        </Col>
                        <Col md={3}>
                            <label style={{width:'100%'}}>
                                URL PERFIL/EMAIL/TELEFONE
                                <Input size="large" placeholder="" />
                            </label>
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
