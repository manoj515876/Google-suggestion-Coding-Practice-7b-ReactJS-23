import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  onSuggestValue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const suggestionResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="logo"
            alt="google logo"
          />
          <div className="suggestion-card">
            <div className="search-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </div>
            <ul>
              {suggestionResults.map(eachUser => (
                <SuggestionItem
                  suggestionsList={eachUser}
                  onSuggestValue={this.onSuggestValue}
                  key={eachUser.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
