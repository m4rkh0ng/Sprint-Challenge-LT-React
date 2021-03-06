import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selectedTab: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    this.setState({ tabs: tabData, cards: cardData });
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
      this.setState({ selectedTab: tab });
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all 
     of the items from cardData. If it is something else, it should only return 
     those cards whose 'tab' matched that which is selected. */
  filterCards = () => {
    const cards = this.state.cards.slice();
      if(this.state.selectedTab === 'all') {
        return this.state.cards;
      } else {
        cards.filter(p => {
          p.tab = this.state.selectedTab;
        });
      };
    };

  render(){
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
        tabs={this.state.tabs}
        selectedTab={this.state.selectedTab}
        selectedTabHandler={this.state.selectedTabHandler}
        />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}