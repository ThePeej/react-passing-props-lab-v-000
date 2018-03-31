import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }



//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) => 
  <div className="fruit-basket">
    <Filter 
      handleChange={onUpdateFilter} 
      filters={filters}
    />
    <FilteredFruitList
      fruit={fruit} 
      filter={currentFilter}
    />
  </div>

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => { }
};

export default FruitBasket;
