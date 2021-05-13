import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propsTypes = {
    items: PropTypes.object.isRequired,
  };

  state = {
    hits: '',
    showModal: false,
    largeImageUrl: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeImg = ({ imgItem }) => {
    this.toggleModal();
    this.setState({
      largeImageUrl: imgItem.largeImageURL,
    });
  };

  render() {
    const { items } = this.props;
    const { showModal, largeImageUrl } = this.state;

    return (
      <>
        <ul className={style.ImageGallery}>
          {items.map(item => (
            <ImageGalleryItem
              key={item.id}
              imgItem={item}
              getLargeImg={this.getLargeImg}
            />
          ))}
        </ul>
        {showModal && (
          <Modal largeImageUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

export default ImageGallery;
