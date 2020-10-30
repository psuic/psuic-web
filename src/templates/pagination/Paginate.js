import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

function pagination(currentPage, pageCount) {
  let delta = 2,
    left = currentPage - delta,
    right = currentPage + delta + 1,
    result = []

  result = _.filter(_.range(1, pageCount + 1), i => i && i >= left && i < right)

  return result
}

const Paginate = ({ pathContext }) => {
  let { index, first, last, pageCount, pathPrefix } = pathContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()
  const paginations = pagination(index, pageCount)
  return (
    <Pagination aria-label="Page navigation ">
      <PaginationItem disabled={first}>
        <PaginationLink previous href={`/${pathPrefix}/${previousUrl}`} />
      </PaginationItem>

      {_.map(paginations, pageNumber => (
        <PaginationItem key={pageNumber} active={index == pageNumber}>
          <PaginationLink
            href={`/${pathPrefix}/${pageNumber == 1 ? '' : pageNumber}`}
          >
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={last}>
        <PaginationLink next href={`/${pathPrefix}/${nextUrl}`} />
      </PaginationItem>
    </Pagination>
  )
}
export default Paginate
