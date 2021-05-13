import { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

import Button from './components/Button/Button';
import imagesApi from './services/images-api';
import Error from './components/Error/Error';
import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
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
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    const options = {
      currentPage,
      searchQuery,
    };

    this.setState({
      isLoading: true,
    });

    imagesApi
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error =>
        this.setState({
          error,
        }),
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { hits, isLoading, error } = this.state;
    const shouldPenderLoadMoreBtn = hits.length > 0 && !isLoading;

    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && <Error message="Something went wrong. Try again." />}
        <ImageGallery items={hits} />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={80}
            width={80}
            className="loader"
          />
        )}

        {shouldPenderLoadMoreBtn && <Button onClick={this.fetchImages} />}
      </div>
    );
  }
}

export default App;
