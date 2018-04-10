import React from 'react';
import Modal from 'react-modal';

class AddAlbum extends React.Component {
  constructor(props){
    super(props);
    this.state = { showModal: false,
                   title: "" };

    this.handleSubmit= this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAlbum({title: this.state.title}).then(
      () => this.handleCloseModal() );
  }

  handleInput() {
    return (e) => (
      this.setState({title: e.target.value})
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>
          &#9547; Add New Album
        </button>
        <Modal
          isOpen={this.state.showModal}
          className="upload-photo-form new-album-form-modal"
          onRequestClose={() => this.setState({showModal: false})}
        >
          <button onClick={this.handleCloseModal}
            className="new-album-close-modal">
            X
          </button>
          <h2>Add Album</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text"
                      value={this.state.title}
                      placeholder="  Title"
                      onChange={this.handleInput()}
                      />
            </label>
            <input type="submit" value="Create New Album" />
          </form>
      </Modal>
      </div>
    );
  }

}

export default AddAlbum;
