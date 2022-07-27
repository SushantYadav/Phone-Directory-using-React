import React, { Component } from 'react';
import './App.css';
import Header from './Header';
class App extends Component {
  constructor() {
    super();
    this.state = {
      subscriberListToShow: [],
    };
    console.log('Constructor Called');
  }
  deletehandler() {
    alert('Delete Clicked');
  }
  componentDidMount() {
    console.log('Component Did Mount Called');
    let newSubscriber = { id: 1, Name: 'Sushant', Phone: '1234567890' };
    let subscribersList = this.state.subscriberListToShow;
    subscribersList.push(newSubscriber);
    this.setState({ subscriberListToShow: subscribersList });
    console.log('State', this.state);
  }

  render() {
    console.log('Render Called');
    /* let subscribers = [
      { id: 1, Name: 'Sushant', Phone: '1234567890' },
      { id: 2, Name: 'Sushant', Phone: '1234567890' },
    ]; */
    return (
      <div>
        {/* <Header /> */}
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {this.state.subscriberListToShow.map((sub) => {
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
