import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import css from './Searchbar.module.css'



export class Searchbar extends Component {

  state = {
    searchQuery: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  setForm = ({ value }) => {
    value = this.state.searchQuery;
    this.setState({ searchQuery: value });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value });
    this.props.onSubmit(this.state.searchQuery);
    this.setForm(event.target);
  };

  render() {
    const { handleOnSubmit, handleChange } = this;
    return (
      <header className={css.searchbar}>
        <form className={css.Form} onSubmit={handleOnSubmit}>
          <button type="submit" className={css.Button}>
            
          </button>

          <input
            className={css.Input}
            onChange={handleChange}
            value={this.state.searchQuery}
            type="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

 