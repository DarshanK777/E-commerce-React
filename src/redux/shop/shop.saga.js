import { takeLatest, call, put, all } from 'redux-saga/effects'
import ShopActionTypes from'./shop.types'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.action'

export  function* fetchCollectionsAsync(){
    
    try{
        yield console.log('inside ')
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(
            convertCollectionSnapshotToMap,
            snapshot
        )
        yield console.log(collectionsMap)
        yield put(fetchCollectionsSuccess(collectionsMap))

    }catch(error){
        yield put(fetchCollectionsFailure(error))
    }   
}

export function* fetchCollectionsStart(){
    yield console.log('saga fetch collection')
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}