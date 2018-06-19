import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {

  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }

  handleOptionOneChange = (e) => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne
    }));
  }

  handleOptionTwoChange = (e) => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }));
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if(toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className='content container'>
        <h1>Would you rather ... ?</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='columns'>
            <div className='column'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    value={optionOne}
                    onChange={this.handleOptionOneChange}
                    type='text'
                    placeholder='Option one'
                  />
                </div>
              </div>
            </div>
            <div className='column is-narrow'>
              <span>or</span>
            </div>
            <div className='column'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input'
                    value={optionTwo}
                    onChange={this.handleOptionTwoChange}
                    type='text'
                    placeholder='Option two'
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type='submit' className='button is-info'>Create question</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion);
