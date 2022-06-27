import React, { Component } from 'react';
import './App.css';
import Header from './Header';
class App extends Component {
  deletehandler() {
    alert('Delete Clicked');
  }

  render() {
    let subscribers = [
      { id: 1, Name: 'Sushant', Phone: '1234567890' },
      { id: 2, Name: 'Sushant', Phone: '1234567890' },
    ];
    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {subscribers.map((sub) => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.Name}</span>
                <span className="grid-item">{sub.Phone}</span>
                <span>
                  <button
                    className="custom-btn delete-btn"
                    onClick={this.deletehandler}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
