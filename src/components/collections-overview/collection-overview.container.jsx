import { connect } from 'react-redux'
import CollectionsOverview from './collections-overview.component'
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import { createStructuredSelector } from 'reselect'
import {WithSpinner} from '../with-spinner/with-spinner.component'
import {compose} from 'redux'

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})

const CollectionsOverviewContainer =compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionsOverview)

export default CollectionsOverviewContainer