import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAtlLv-kCX-7exW0eNOMGetHxjIin1rqIM'

YTSearch({
  key: API_KEY,
  term: 'serfboards'
}, function(data) {
  console.log(data);
})

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('container'))
