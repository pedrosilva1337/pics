import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    // event.target.value - esta propriedade é chamada sempre que se escreve alguma coisa lá em baixo no input
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
