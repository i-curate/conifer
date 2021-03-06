import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AdminHeaderUI from 'components/siteComponents/AdminHeaderUI';


const mapStateToProps = ({ app }) => {
  return {
    collection: app.get('collection'),
    isAnon: app.getIn(['auth', 'user', 'anon'])
  };
};

export default withRouter(connect(
  mapStateToProps
)(AdminHeaderUI));
