import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import './ItemList.scss';

class ItensList extends Component {
  renderList() {
    const { itens, selectItem, activeItem } = this.props;

    return itens.map((item) => {
      const itemClassName = activeItem && activeItem.title === item.title; 
      console.log(item);
      return (
        <div className={itemClassName ? 'list-item active' : 'list-item'} key={item.title} onClick={() => selectItem(item)}>
          <img src={item.img} alt={item.title} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="list-container"> 
        {this.renderList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    itens: state.itens,
    activeItem: state.activeItem
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectItem: selectItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItensList);
