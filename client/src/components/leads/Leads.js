import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Row, Col, DatePicker, Tabs, Icon} from 'antd';
import 'antd/dist/antd.css';
import CadastroLeads from './CadastroLeads';

const {TabPane} = Tabs;

const Leads = () => {
    return (
        <Fragment>
            <Row className={'pr-3 pl-3'}>
                <Col>
                    <Tabs defaultActiveKey="1">
                        <TabPane
                            tab={
                                <span>
                                  <i className="fas fa-folder-open fa-2x mr-2"></i>
                                  CADASTRO LEAD'S
                                </span>
                            }
                            key="1"
                        >
                            <CadastroLeads/>
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                  <i className="fas fa-user fa-2x mr-2"></i>
                                  FOLLOW
                                </span>
                            }
                            key="2"
                        >
                            Tab em construcao
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </Fragment>

    )
};


const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {}
)(Leads);
