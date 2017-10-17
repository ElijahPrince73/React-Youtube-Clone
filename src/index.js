import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAtlLv-kCX-7exW0eNOMGetHxjIin1rqIM'

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('container'))
