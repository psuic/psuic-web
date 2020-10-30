import React from 'react'
import _ from 'lodash'
import Paginate from './pagination/Paginate'
import AnnualReportContainer from './about/AnnualReportContainer'
import { getTitleFromPostCategories,getTagFromURL } from '../services/utils';


const AnnualReportTemplate = ({ loading, data, pathContext }) => {
  if (loading) {
    return null
  } else {
    const datas = _.chain(pathContext)
      .get('group')
      .map('node')
      .value()

    return (
      <div>
        <AnnualReportContainer
          datas={datas}
          renderPaginate={<Paginate pathContext={pathContext}  tag={getTagFromURL()} />}
        />
      </div>
    )
  }
}

export default AnnualReportTemplate
