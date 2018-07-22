import React from 'React';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllTags();
  }

  handleInput() {
    return (e) => (
      this.setState({tagName: e.target.value})
    );
  }

  render () {
    return  (
      <div>
        <form>
          <input
            type="text"
            value={this.state.tagName}
            placeholder="Search..."
            />
        </form>
      </div>
    );
  }
}

export default SearchBar;
