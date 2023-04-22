import { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {

  static defaultProps = {
    src: '',
    alt: '',
    largeImage: '',
  };

  createModal = () => {
    const { largeImage, alt } = this.props;
    this.props.isShowModal(largeImage, alt);
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.galleryItem}>
        <img
          className={css.ImageGalleryItem}
          src={src}
          alt={alt}
          onClick={this.createModal}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  isShowModal: PropTypes.func.isRequired,
};
export default ImageGalleryItem;