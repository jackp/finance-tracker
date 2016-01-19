/**
 * <Total />
 */

import React from 'react';
import { connect } from 'react-redux';

const Total = ({ total }) => (
  <div className="ui statistic">
    <div className="label">Total</div>
    <div className="value">${total}</div>
  </div>
);

export default connect(state => ({ total: state.app.total }))(Total);
