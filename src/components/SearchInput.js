import React from 'react'
import PropTypes from 'prop-types'
import "../assets/styles/style.css"

function SearchInput(props) {
  return (
    <input 
      type='text'
      placeholder="Enter username"
      onChange={props.handleSearch}
    />
  )
}

SearchInput.propTypes = {
  handleSearch: PropTypes.func
}

export default SearchInput