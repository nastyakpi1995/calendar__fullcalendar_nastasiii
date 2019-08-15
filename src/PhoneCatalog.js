import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';
import PhonesPage from './PhonesPage';

class PhoneCatalog extends React.Component {
  state = {
    phoneArrays: [],
  }

  render() {
    const {
      phoneId, urlImg, phones, handleFilter,
      handleSort, setItemToBasket, sortField,
    } = this.props;
    const { phoneArrays } = this.state;

    return (
      <div className="table">
        <div className="table__header">
          <form action="/" className="adress-delivery__header">
            <div className="search__container">
              <button type="button" className="search__button">
                {sortField}
              </button>
              <input
                type="text"
                className="input"
                placeholder="search"
                onChange={handleFilter}
              />
            </div>
            <div
              className="destination-details"
            >
              <select
                name=""
                onClick={handleSort}
                className="adress-delivery__destination-details"
              >
                <option value="alphabet">sort By Alphabet</option>
                <option value="">sort order</option>
              </select>
            </div>
          </form>
          {phoneArrays}
        </div>
        {phones.length === 0 && phoneId === 0
          ? <Loading />
          : (
            phones.map(phone => (
              <PhonesPage
                key={phone.id}
                phone={phone}
                phoneId={phoneId}
                urlImg={urlImg}
                setItemToBasket={setItemToBasket}
              />
            )))
        }
      </div>
    );
  }
}

PhoneCatalog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  phones: PropTypes.array.isRequired,
  // eslint-disable-next-line react/require-default-props
  phoneId: PropTypes.string,
  urlImg: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleSort: PropTypes.func.isRequired,
  setItemToBasket: PropTypes.func.isRequired,
  sortField: PropTypes.string.isRequired,
};

export default PhoneCatalog;
