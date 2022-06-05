import SiSearch from './src/si-search';

/* istanbul ignore next */
SiSearch.install = function (Vue) {
  Vue.component(SiSearch.name, SiSearch);
};

export default SiSearch;
