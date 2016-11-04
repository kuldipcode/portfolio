import React, { Component, PropTypes } from 'react';
import BsPagination from 'react-bootstrap/lib/Pagination';

export default class Pagination extends Component {
  static propTypes = {
    items: PropTypes.array,
    itemsPerPage: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items) {
      this.setState({
        activePage: 1
      });
    }
  }

  handleSelect = (_, {eventKey}) => {
    this.setState({
      activePage: eventKey
    });
  };

  render() {
    const { items, itemsPerPage } = this.props;
    const { activePage } = this.state;
    const startIndex = (activePage - 1) * itemsPerPage;
    let endIndex = activePage * itemsPerPage;
    endIndex = (endIndex >= items.length) ? items.length : endIndex;
    const numberOfPages = Math.ceil(items.length / itemsPerPage);

    const visibleItems = items.slice(
      startIndex,
      endIndex
    );

    return items.length ? (
      <div>
        <p className={`text-right`}>
          Showing {startIndex + 1} - {endIndex} of {items.length} items
        </p>
        { visibleItems }

        { numberOfPages > 1 &&
          <BsPagination
            bsSize="medium"
            items={numberOfPages}
            activePage={activePage}
            onSelect={this.handleSelect} />
        }
      </div>
    ) : null;
  }
}
