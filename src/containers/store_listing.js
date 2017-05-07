import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStores } from '../actions';
import StoreCard from '../components/store_card';

class StoreListing extends Component {

  componentWillMount() {
    this.props.getStores();
  }

  renderStoreCards() {
    return this.props.stores.map(store => (
      <StoreCard key={store.nid[0].value} store={store} />
    ));
  }

  render() {
    return (
      <div className="row container">
        {this.renderStoreCards()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { stores: state.stores.stores };
}

StoreListing.propTypes = {
  getStores: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getStores })(StoreListing);
