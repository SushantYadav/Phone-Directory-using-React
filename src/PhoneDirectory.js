import React, { Component } from 'react';
import AddSubscriber from './AddSubscriber';
class PhoneDirectory extends Component {
  constructor() {
    Super();
    this.state = {
      subscriberList =[]
    }
    AddSubscriber = (newSubscriber) => {
      let subscriberList = this.state.subscriberList;
      if (subscriberList.length > 0) {
        newSubscriber.id = subscriberList[subscriberList.length - 1].id + 1;
      } else {
        newSubscriber = 1;
      }
      subscriberList.push(newSubscriber);
      this.setState({ subscriberList: subscriberList });
      console.log(this.state.subscriberList);
    }
  }
  render() {
    return (<AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />);
  }
}
export default PhoneDirectory;
