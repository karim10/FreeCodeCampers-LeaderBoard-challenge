import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
  render() {
    return <ul>
      {
        this.props.items.map(item => {
          return <li key={item}> {item} </li>
        })
      }
      </ul>
  }
}

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        "Apples",
         "Broccoli",
         "Chicken",
         "Bacon",
         "Eggs",
         "Salmon",
         "Granola",
         "Bananas",
         "Beer",
         "Wine",
         "Yogurt"
      ],
      items: [
        "Apples",
         "Broccoli",
         "Chicken",
         "Bacon",
         "Eggs",
         "Salmon",
         "Granola",
         "Bananas",
         "Beer",
         "Wine",
         "Yogurt"
      ]
    }
  }

  filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  };

  render() {
    return (
      <div className="filter-list">
        <input type="text" placeholser="Search" onChange={this.filterList.bind(this)}/>
        <List items={this.state.items}/>
      <ul>
      </ul>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Test Filter List </h1>
        </header>
      </div>
      </div>
    );
  }
}

export default FilteredList;
