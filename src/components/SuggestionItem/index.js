import './index.css'
import {Component} from 'react'

class SuggestionItem extends Component {
  render() {
    const {suggestionsList, onSuggestValue} = this.props
    const {suggestion} = suggestionsList
    const onValue = () => {
      onSuggestValue(suggestion)
    }

    return (
      <li className="list-card">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          alt="arrow"
          className="arrow"
          onClick={onValue}
        />
      </li>
    )
  }
}

export default SuggestionItem
