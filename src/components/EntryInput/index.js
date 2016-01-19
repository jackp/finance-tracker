/**
 * <EntryInput />
 */

import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addEntry } from '../../actions';

let EntryInput = ({ fields, dispatch, handleSubmit, resetForm }) => {
  return (
    <div className="ui large form">
      <div className="inline fields">
        <label>Add Entry</label>
        <div className="field">
          <input type="text" placeholder="Entry" {...fields.content} />
        </div>
        <div className="field">
          <div className="ui right labeled action input">
            <div className="ui label">$</div>
            <input type="number" placeholder="Amount" {...fields.amount} />
            <button className="ui button" onClick={handleSubmit(data => {
              dispatch(addEntry(data));
              resetForm();
            })}
            >Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

EntryInput = reduxForm({
  form: 'entry',
  fields: ['content', 'amount'],
})(EntryInput);

export default connect()(EntryInput);
