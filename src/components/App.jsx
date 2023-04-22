
import { Component } from 'react';
import fetchImagesWithQuery from 'services/api';
import {Searchbar} from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Button} from './Button/Button';
import {Loader} from './Loader/Loader';




export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  async uploadImages() {
    this.setState({ isLoading: true });

    try {
      const { totalHits, hits } = await fetchImagesWithQuery(
        this.state.query,
        this.state.page
      );
      if (!totalHits) {
        throw new Error('No data');
      }

      this.setState(p => ({ images: [...p.images, ...hits] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  getSearchQuery = searchQuery => {
    if (this.state.query !== searchQuery) {
      this.setState({ query: searchQuery, images: [], page: 1 });
    }
  };

  nextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.uploadImages();
    }
  }

  render() {
    const { query, page, images, isLoading } = this.state;
    const isShowGallery = images.length > 0 && query;
    const isShowButton = isShowGallery && !isLoading && !(images.length % 12);
    return (
      <>
        <Searchbar onSubmit={this.getSearchQuery} />
        {isShowGallery && <ImageGallery images={images} page={page} />}
        {isShowButton && <Button onClick={this.nextPage} />}
        {isLoading && <Loader />}
      </>
    );
  }
}