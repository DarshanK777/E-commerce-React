import { takeLatest, call, put, all } from 'redux-saga/effects'
import ShopActionType from'./shop.types'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.action'

export  function* fetchCollectionsAsync(){
    
    try{

        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(
            convertCollectionSnapshotToMap,
            snapshot
        )
        yield put(fetchCollectionsSuccess(collectionsMap))

    }catch(error){
        yield put(fetchCollectionsFailure(error))
    }   
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas(){
    yield all(call(fetchCollectionsStart))
}