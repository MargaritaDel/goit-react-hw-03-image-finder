import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import '../styles.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';

export class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    page: PropTypes.number.isRequired,
  };
  state = {
    isShowModal: false,
    largeImage: '',
    alt: '',
  };

  showModal = (largeImage, alt) => {
    this.setState({ isShowModal: true });
    this.setState({ largeImage: largeImage });
    this.setState({ alt: alt });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { isShowModal, largeImage, alt } = this.state;
    const { hideModal, showModal } = this;
    return (
      <>
        {isShowModal && (
          <Modal src={largeImage} alt={alt} onClick={hideModal} />
        )}
        <ul className="ImageGallery">
          {this.props.images.map(
            ({ id, webformatURL, tags, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                src={webformatURL}
                alt={tags}
                largeImage={largeImageURL}
                isShowModal={showModal}
              />
            )
          )}
        </ul>
      </>
    );
  }
}