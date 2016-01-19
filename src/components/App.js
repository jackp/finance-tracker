/**
 * <App />
 * - Application container component
 */

import React from 'react';

import EntryInput from './EntryInput';
import EntryList from './EntryList';
import Total from './Total';

import '../styles/main.scss';

const App = () => (
  <div className="ui one column centered grid">
    <h1 className="centered row">Finance Tracker</h1>
    <EntryInput />
    <div className="centered row">
      <EntryList />
    </div>
    <Total />
  </div>
);

export default App;
