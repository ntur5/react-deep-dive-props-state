import React, { Component } from 'react';
import JournalList from './journals/journal_list';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <JournalList heading="Journal Entry 1"/>
        {/* <JournalList heading="Journal Entry 2"/> */}
      </div>
    );
  }
}