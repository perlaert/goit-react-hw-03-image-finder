import style from './ImageGallery.module.css';

const ImageGallery = ({ items }) => {
  return (
    <ul className={style.ImageGallery}>
      {items.map(({ id, webformatURL, tags }) => (
        <li key={id}>
          <img src={webformatURL} alt={tags} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
