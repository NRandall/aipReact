import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
  footerStyle: {
    marginTop: '22px',
    backgroundColor: '#eee',
  },
  textStyle: {
    textAlign: 'center',
    padding: '22px',
  },
};

class StoreCard extends Component {
  render() {
    const store = this.props.store;
    return (
      <div className="col-sm-6 col-md-4">
        <Link to={"store/" + store.nid[0].value}>
          <div className="thumbnail card">
            <div className="img-container">
              <img src={store.field_hero_image[0].url} alt={store.field_hero_image[0].alt} />
            </div>
            <div className="caption">
              <h4 className="store-name">{store.title[0].value.toUpperCase()}</h4>
              <p className="address">{store.field_address[0].value}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default StoreCard;