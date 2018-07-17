import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as BloomerPagination, Page, PageControl, PageList, PageEllipsis, PageLink } from 'bloomer';
import { Button } from '../components';

export default class Pagination extends React.Component {
  static propTypes = {
    itemsPerPage: PropTypes.number,
    handlePageChange: PropTypes.func,
    hasNextPage: PropTypes.bool,
    pagination: PropTypes.string,
    total: PropTypes.number,
    loadMoreText: PropTypes.string,
    defaultPageSize: PropTypes.number
  };

  state = { pageNumber: 1, pagination: this.props.pagination };

  static getDerivedStateFromProps(nextProps, prevState) {
    return nextProps.pagination !== prevState.pagination ? { pageNumber: 1, pagination: nextProps.pagination } : null;
  }

  onItemClick = pageNumber => {
    const { handlePageChange, pagination } = this.props;
    this.setState({ pageNumber: pageNumber }, handlePageChange(pagination, pageNumber));
  };

  showPreviousPage = e => {
    e.preventDefault();
    const { handlePageChange, pagination } = this.props;
    const { pageNumber } = this.state;
    if (pageNumber > 1) {
      this.setState(prevState => {
        const newPageNumber = prevState.pageNumber - 1;
        handlePageChange(pagination, newPageNumber);
        return {
          pageNumber: newPageNumber
        };
      });
    }
  };

  showNextPage = (e, pagesArray) => {
    e.preventDefault();
    const { handlePageChange, pagination } = this.props;
    const { pageNumber } = this.state;
    if (pageNumber < pagesArray.length) {
      this.setState(prevState => {
        const newPageNumber = prevState.pageNumber + 1;
        handlePageChange(pagination, newPageNumber);
        return {
          pageNumber: newPageNumber
        };
      });
    }
  };

  renderPaginationItems(pagesArray) {
    const finalArray = pagesArray.map(pageNumber => (
      <Page
        key={pageNumber.toString()}
        onClick={() => this.onItemClick(pageNumber)}
        active={this.state.pageNumber === pageNumber}
      >
        <PageLink
          href="#"
          onClick={e => {
            e.preventDefault();
          }}
        >
          {pageNumber}
        </PageLink>
      </Page>
    ));
    const ellipsis = (
      <Page>
        <PageEllipsis />
      </Page>
    );
    finalArray.splice(0, 0, ellipsis);
    finalArray.splice(-1, 0, ellipsis);
    return finalArray;
  }

  render() {
    const { pageNumber } = this.state;
    const {
      itemsPerPage,
      handlePageChange,
      hasNextPage,
      pagination,
      total,
      loadMoreText,
      defaultPageSize
    } = this.props;
    if (pagination === 'relay') {
      return hasNextPage ? (
        <div>
          <div>
            <small>
              ({itemsPerPage} / {total})
            </small>
          </div>
          <Button id="load-more" color="primary" onClick={() => handlePageChange(pagination, null)}>
            {loadMoreText}
          </Button>
        </div>
      ) : null;
    } else {
      const pagesArray = Array(Math.ceil(total / defaultPageSize))
        .fill(1)
        .map((x, y) => x + y);
      return (
        <BloomerPagination>
          <PageControl isActive={pageNumber > 1} href="#" onClick={this.showPreviousPage}>
            Previous
          </PageControl>
          <PageControl
            isActive={pageNumber < pagesArray.length}
            href="#"
            onClick={e => this.showNextPage(e, pagesArray)}
          >
            Next
          </PageControl>

          <PageList>{this.renderPaginationItems(pagesArray)}</PageList>
        </BloomerPagination>
      );
    }
  }
}
