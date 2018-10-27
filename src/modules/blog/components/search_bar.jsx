import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { IoIosSearch } from 'react-icons/io';

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      active: ''
    };
    this.handleText = this.handleText.bind(this);
  }

  handleText(e) {
    e.preventDefault();
    const currentValue = e.target.value;
    const isActive = currentValue !== '' ? 'is-active' : '';
    this.props.updateSearch(currentValue);
    this.setState({
      active: isActive
    });
  }

  render() {
    return (
      <div className="Search-container">
        <form className={`Search-form ${this.state.active}`}>
          <input
            onFocus={e => (e.target.placeholder = '')}
            onBlur={e => (e.target.placeholder = 'write something')}
            onChange={e => this.handleText(e)}
            className="Search-input" type="text"
            placeholder="write something"
          />
          <button className="Search-button" type="submit">
            <IoIosSearch className={`Search-icon ${this.state.active}`} />
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, (dispatch) => ({
  updateSearch(value) {
    dispatch({
      type: 'NEW_SEARCH',
      search: value
    });
  }
}))(SearchBar);
