import React, { Component } from 'react';
import { Link } from 'react-router';

export default class StoreDescription extends Component {

  render() {

    if (this.props.current.length === 0) return <div>bottle</div>;
    return (
      <div className="card">
        <h3 className="store-name text-uppercase">{this.props.current.title[0].value}</h3>
        <p className="description" dangerouslySetInnerHTML={{__html: `${this.props.current.body[0].value}`}}></p>
        <hr />
        {() => {
          if (this.props.current.field_website.length>0) {
            return (
              <h5>
                <Link to={this.props.current.field_website[0].value} target="_blank">
                  <i className="fa fa-external-link fa-lg contact-icon" aria-hidden="true"></i>
                  {this.props.current.field_website[0].value.slice(7)}
                </Link>
              </h5>
            );
          }
        }}
        {() => {
          if (this.props.current.field_email.length>0) {
            return (
              <h5>
                <Link to={'mailto:' + this.props.current.field_email[0].value} target="_blank">
                  <i className="fa fa-envelope fa-lg contact-icon" aria-hidden="true"></i>
                  {this.props.current.field_email[0].value}
                </Link>
              </h5>
            );
          }
        }}
        {() => {
          if (this.props.current.field_phone_number.length>0) {
            return (
              <h5>
                <Link to={'tel:' + this.props.current.field_phone_number[0].value} target="_blank">
                  <i className="fa fa-phone fa-lg contact-icon" aria-hidden="true"></i>
                  {this.props.current.field_phone_number[0].value}
                </Link>
              </h5>
            );
          }
        }}
        <br />
        <h4>{this.props.current.field_address[0].value}</h4>
          
        <div className="social">
          {() => {
            if (this.props.current.field_facebook.length>0) {
              return (
                <Link to={this.props.current.field_facebook} target="_blank">
                  <i className="fa fa-facebook fa-4x social-icon" aria-hidden="true"></i>
                </Link>
              );
            }
          }}
          {() => {
            if (this.props.current.field_twitter.length>0) {
              return (
                <Link to={this.props.current.field_twitter} target="_blank">
                  <i className="fa fa-twitter fa-4x social-icon" aria-hidden="true"></i>
                </Link>
              );
            }
          }}
          {() => {
            if (this.props.current.field_instagram.length>0) {
              return (
                <Link to={this.props.current.field_instagram} target="_blank">
                  <i className="fa fa-instagram fa-4x social-icon" aria-hidden="true"></i>
                </Link>
              );
            }
          }}
        </div>   
      </div>
    )
  }
}



// <div className="other-stores">
//   <h4>Other dealers in this region:</h4>
//   <ul className="store-list">
//     <li *ngFor="let close of stores | regionFilter:store.region:store.name">
//       <a [routerLink]="['/store', close.id]">  
//         {{close.name}}
//       </a>
//     </li>
//   </ul>
// </div>