import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  _onInputChange(e) {
    this.setState({ term: e.target.value })
  }

  _onFormSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    return (
      <form onSubmit={this._onFormSubmit.bind(this)} className="input-group" >
        <input
          placeholder="Get a five-day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this._onInputChange.bind(this)}
           />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
