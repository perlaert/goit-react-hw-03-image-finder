import style from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageUrl } = this.props;
    return createPortal(
      <div className={style.Overlay} onClick={this.handleOverlayClick}>
        <div className={style.Modal}>
          <img src={largeImageUrl} alt="large img" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
