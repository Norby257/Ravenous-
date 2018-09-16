import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
    }
 
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOption[sortByOption];
        <li key={sortByOptionValue}> {sortByOption} </li>
        });
      }

      getSortByClass(sortByOption) {
          return
          this.state === sortByOption ? 'active' : ''

      }

      handleSortByChange(sortByOption) {
          this.setState({sortBy: this.state})
      }

    render() {
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                 {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
          </div>
        )
    }

}

export default SearchBar;





