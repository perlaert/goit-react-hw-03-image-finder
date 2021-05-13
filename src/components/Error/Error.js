import style from './Error.module.css';

const Error = ({ message }) => {
  return <div className={style.error}>{message}</div>;
};

export default Error;
