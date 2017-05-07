import React, { Component } from 'react';


const styles = {
  footerStyle: {
    marginTop: '22px',
    backgroundColor: '#eee',
  },
  textStyle: {
    padding: '22px',
  },
};

export default class Footer extends Component {

  render() {
    return (
      <footer style={styles.footerStyle}>
        <div className="container">
          <p style={styles.textStyle} className="text-center">
            <span className="lead">Sponsored by the VSADA</span>
            <br />
            Valley of the Sun Antique Dealers Association
            <br />
            <a href="mailto:antiqueplaza@gmail.com">Contact</a>
          </p>
        </div>
      </footer>
    );
  }
}
