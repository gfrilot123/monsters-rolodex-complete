import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// Basic structure for React classes:
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  /**
   * Life Cycle: ComponentDidMount
   *  1. Fetches a list of users from the provided API creating a promise
   *  2. Returns a response in json format
   *  3. Updates state monsters equal to users
   */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // Updates searchField state to user input
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  /**
   * Destructures all state objects
   * Iniatializes a variable for filtering searchField input
   * Returns a static web page containing a Serchbox and a CardList Component
   * @returns 
   */
  render() {
    const { monsters, searchField } = this.state;
    // Next line works with no value in filter because any string will always include ''
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
