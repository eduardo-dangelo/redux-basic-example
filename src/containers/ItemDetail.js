import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectForm } from '../actions/index';
import { bindActionCreators } from 'redux';
import './ItemDetail.scss';

class ItemDetail extends Component {
  render() {
    if (!this.props.item) {
      return(
        <div className="item-detail">
          <h2>Select a character</h2>
          <div className="img-container" />
        </div>
      )
    }

    const { item, activeForm } = this.props;
    console.log(item, activeForm);

    return(
      <div className="item-detail">
        <h2>{item.title}</h2>
        <div className="img-container">
          <img src={item.full} alt={item.title} />
        </div>

        <div className="hero-container">
          <img src={item.hero} alt="logo" className={'hero ' + item.title} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem,
    activeForm: state.activeForm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectForm: selectForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);