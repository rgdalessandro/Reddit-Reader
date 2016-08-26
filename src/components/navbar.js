import React, { Component } from 'react';


export default class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',     // variable to control input field
    };
  }
  
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Ricardo's Reddit Reader</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subreddit to Add"
                  value={ this.state.term }         // this text input is controlled
                  onChange={event => this.setState({ term: event.target.value })}
                />
              </div>
              <button
                type="submit"
                className="btn btn-default"
                onClick={ () => this._handleSubmit() }
              >Add</button>
            </form>
            
          </div>{/*<!-- /.navbar-collapse -->*/}

        </div>{/*<!-- /.container-fluid -->*/}
      </nav>
    );
  }

  // Method to handle what happens when the 'Add' button
  // is clicked. This method also calls the method passed
  // down from App through props
  _handleSubmit() {
    event.preventDefault();
    this.props.onAddSubreddit(this.state.term);
    this.setState({ term: '' });
  }

}
