import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

import { Row, Col, Card } from 'react-bootstrap';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
      <Row className={'p-3'}>
        <Col>
          <Card text="white" style={{ width: '18rem', backgroundColor: '#41A7FF' }} className={'text-center'}>
            <Card.Body>
              <Card.Text>
                <Link to='/leads' style={{ color: '#fff' }}>Leads e Follow</Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
  );
};


Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
