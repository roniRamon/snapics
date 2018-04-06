import React from 'react';
import { Link } from 'react-router-dom';



class PhotoShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps (newProps) {
    if (this.props.match.params.photoId != newProps.match.params.photoId){
      this.props.fetchPhoto(newProps.match.params.photoId);
    }
  }

  render() {
    debugger;
    if(typeof this.props.photo == "undefined" ){
      return;
    }
    return (
      <div>
        <section className="hero-show-page" >
          <Link to="/explore">&#8592; Back to explore</Link>
          <img src={this.props.photo.imageUrl} />
        </section>
      </div>
    );
  }

}

export default PhotoShow;
