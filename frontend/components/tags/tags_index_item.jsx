import React from 'react';

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const photo = this.props.photo.id;
    this.props.deleteTag(this.props.tag.id).then(
      (res) => this.props.fetchPhoto(photo)
    );
  }

  render() {
    if(this.props.tag === undefined){
      return <section >Loading...</section>;
    }
    return (
      <div className="tag-div-container">
        <li>
          <a href="#" >
            {this.props.tag.tagName}
          </a>
          {
            this.props.currentUser.id === this.props.photo.ownerId ?
            (
              <button onClick={this.handleDelete}
                className="delete-tag-button" >
                X
              </button>
            ) :
            ""

          }

        </li>
      </div>
    );
  }
}

export default TagIndexItem;
