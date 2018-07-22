import { connect } from 'react-redux';
import { fetchAllTags } from '../../actions/tags_actions';
import SearchBar from './search_bar';

const mapDispatchToProps = (dispatch) => ({
  fetchAllTags: () => dispatch(fetchAllTags()),
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
