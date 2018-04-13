import React from 'react';
import TagIndexItem from './tags_index_item';
import FormTagContainer from './form_tag_container';

class TagsIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photo.id);
  }

  componentWillMount() {
    this.props.fetchPhoto(this.props.photo.id);
  }


  render(){
    if(this.props.photo === undefined || this.props.tags === undefined){
      return <section >Loading...</section>;
    }
    return (
      <div className="tags-wrapper">
        <hr />
        <ul className="tag-form-ul1">
          <li>
            <span className="tags-header">
              Tags
            </span>
            {
              this.props.currentUser.id === this.props.photo.ownerId ? (
                <span className="tag-form" >
                  Add Tags
                  <FormTagContainer
                    photo={this.props.photo}
                    />
                </span>
              ) : (
                ""
              )
            }
          </li>
        </ul>
        <ul className="tag-form-ul2">
          {
            this.props.tags.map( (tag, i) => (
                <TagIndexItem
                  tag={tag}
                  key={`tags-${i}`}
                  fetchPhoto={this.props.fetchPhoto}
                  deleteTag={this.props.deleteTag}
                  photo={this.props.photo}
                  currentUser={this.props.currentUser}
                  />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default TagsIndex;
