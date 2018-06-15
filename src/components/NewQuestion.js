import React, { Component } from 'react';

class NewQuestion extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className='content container'>
        <h1>Would you rather ... ?</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='columns'>
            <div className='column'>
              <div className='field'>
                <div className='control'>
                  <input className='input' type='text' placeholder='Option one'/>
                </div>
              </div>
            </div>
            <div className='column is-narrow'>
              <span>or</span>
            </div>
            <div className='column'>
              <div className='field'>
                <div className='control'>
                  <input className='input' type='text' placeholder='Option two'/>
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

export default NewQuestion;
