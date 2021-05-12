import { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import imagesApi from './services/images-api';
// import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      currentPage,
      searchQuery,
    };

    imagesApi.fetchImages(options).then(hits => {
      this.setState(prevState => ({
        hits: [...prevState.hits, ...hits],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery items={this.state.hits}>
          <ImageGalleryItem />
        </ImageGallery>
        <Button onClick={this.fetchImages} />
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
