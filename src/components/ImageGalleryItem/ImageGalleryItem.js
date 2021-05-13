import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imgItem, getLargeImg }) => {
  const { webformatURL, tags } = imgItem;
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItemImage}
        onClick={() => getLargeImg({ imgItem })}
      />
    </li>
  );
};

ImageGalleryItem.protoTypes = {
  imgItem: PropTypes.object.isRequired,
  getLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
