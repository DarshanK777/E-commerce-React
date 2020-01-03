import React from 'react';
import './collection-item.styles.scss';
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import { CollectionItemStyles, CollectionFooterStyles, CustomButtonStyles, NameSpanStyles, PriceSpanStyles, ImageStyles } from './collection-item.styles'

const CollectionItem = ({ item, addItem }) => {
  const {   name, price, imageUrl} =  item;
  return(
  <CollectionItemStyles >
    <ImageStyles
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <CollectionFooterStyles >
      <NameSpanStyles >{name}</NameSpanStyles>
      <PriceSpanStyles>{price}</PriceSpanStyles>
    </CollectionFooterStyles>
    <CustomButtonStyles onClick = {() => addItem(item)} inverted >Add TO Cart</CustomButtonStyles>
  </CollectionItemStyles>)};

const mapDispatchToProps = dispatch =>({
  addItem: item =>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);