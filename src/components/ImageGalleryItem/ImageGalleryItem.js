import style from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
