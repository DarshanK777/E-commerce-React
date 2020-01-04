import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component.js'
import {Route}from 'react-router-dom'
import CollectionPage from '../collection/collection.component'
import {firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.action'

class ShopPage extends React.Component{
  unsubscribeFromSnapshot = null

  componentDidMount(){
    const {updateCollections} = this.props
    const collectionRef = firestore.collection('collections')
    
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        console.log("rhis is collectionsMap " + collectionsMap)
        
        updateCollections(collectionsMap)

        // console.log("snapshot :", snapshot)
    }) 

  }

  render(){
    const { match } = this.props
    return (
      <div className='shop-page'>
          <Route exact path={`${match.path }`} component={CollectionsOverview}/> 
          <Route path = {`${match.path}/:collectionId`} component  = {CollectionPage}/>
      </div>
    );
}
}

const mapDispatchToProps = dispatch =>(
  {
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
  }
)

export default connect(null, mapDispatchToProps)(ShopPage)
