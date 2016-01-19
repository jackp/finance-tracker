/**
 * <EntryList />
 */

import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

const EntryList = ({ entries }) => (
  <div className="ui list">
    { entries.map((entry, i) => {
      const iconClass = classNames(
        'thumbs outline icon',
        { 'up green': parseInt(entry.amount, 10) >= 0 },
        { 'down red': parseInt(entry.amount, 10) < 0 },
      );

      return (
        <div className="item" key={i}>
          <i className={iconClass} />
          <div className="content">
            { entry.content } : { entry.amount }
          </div>
        </div>
      );
    })}
  </div>
);

export default connect(state => ({ entries: state.app.entries }))(EntryList);
