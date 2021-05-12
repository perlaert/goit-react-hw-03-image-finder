import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={style.ImageGalleryItem}>
      <img src="" alt="" className={style.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
