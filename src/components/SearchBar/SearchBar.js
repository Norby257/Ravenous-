import React from 'react';
import './SearchBar.css';

this.sortByOptions = {
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
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
       
      
    }

  
 
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
        let sortByOptionValue = this.sortByOptions[sortByOption];
        <li className={this.getSortByClass(sortByOptionValue)} 
        key={sortByOptionValue}> 
        {sortByOption} 
        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}</li>
        });
      }

      getSortByClass(sortByOption) {
          return
          this.state === sortByOption ? 'active' : ''

      }

      handleSortByChange(sortByOption) {
          this.setState({sortBy: sortByOption})
      
      }

      handleTermChange(event) {
          this.setState({term: event.target.value})

      }


      handleLocationChange(event) {
          this.setState({location: event.target.value})

      }

      handleSearch(event) {
          this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
          event.preventDefault()

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
              <input placeholder="Search Businesses"
              onChange={this.handleTermChange} />

              <input placeholder="Where?" 
              onChange={this.handleLocationChange}/>
            </div>
            <div className="SearchBar-submit"
            onClick={this.handleSearch}>
              <a>Let's Go</a>
            </div>
          </div>
        )
    }

}

export default SearchBar;





