import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStores } from '../actions';
import Gallery from '../components/gallery';
import StoreDescription from '../components/store_description';

class StoreDetail extends Component {
  componentWillMount() {
    this.props.getStores();
    console.log(this.props.stores);
  }
  render() {
    const id = this.props.params.id;
    let store = [];
    if (this.props.stores.length === 0) return <div>Loading...</div>;
    if (this.props.stores.length > 0) {
      store = this.props.stores.filter(store=>store.nid[0].value === id);
      store = store[0];
    }
    return (
      <div>
        <Gallery images={store.field_gallery_images} />
        <StoreDescription current={store} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stores: state.stores.stores };
}

export default connect(mapStateToProps, { getStores })(StoreDetail);
