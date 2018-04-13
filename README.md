<p align="center">
  ![screen shot](app/assets/images/Slide1.png)
</p>


[SnaPics ](https://snap-pics.herokuapp.com/), is a flickr inspired photo sharing application that allow the users to upload and share photos, create albums, and view other users profiles and photos.

### Technologies

The application is writing in rails/PostgreSQL as the backend and React and Redux as the frontend.
for storing photos - cloudinary.

[SnaPics Wiki page](https://github.com/roniRamon/snapics/wiki)

![screen shot](app/assets/images/screen_show.png)

### features
* User Authentication
* Logged in users can upload photos, view list of photos
* Users can create an album and upload image to the album
* Comment on other photos
* Add tags to the photo 

##### Uploading a Photo
User can upload a photo, the photo visible in his profile page and from the home page.
when a user click on the upload button a modal with a form will allow the user to enter a title and a description and tp upload the photo.
User can change his profile image by going to his profile and clicking on the profile image.
The uploaded image is stored on cloudinary and the url to the image is stored in the application database once the form was submitted.

```javascript
handleSubmit(e) {
  e.preventDefault();
  let photo = {
    img_url: this.state.uploadedFileCloudinaryUrl,
    owner_id: this.state.ownerId,
    title: this.state.title,
    description: this.state.description,
  };
  this.props.createPhoto(photo).then(
    () => this.handleCloseModal()
  );
}
```

##### Photo
 The photo container holds information about the
 photo - title and description and the owner of the image. The component is reused in different places in application. I am reusing the code in the home page user profile and displaying the photos in an album.

```javascript

export default ({ photo }) => (
  <div className="image-item-wrap">
    <Link to={`/photo/${photo.id}`}>
      <li>
          <img src={photo.imageUrl} alt={photo.title}/>
          <p>{photo.title}</p>
          <p className="photo-username">
            <span className="photo-username-title">
              {photo.username}
            </span>
            <span>
              { photo.comments.length == 1 ?
                photo.comments.length + " Comment" :
                photo.comments.length + " Comments"
              }
            </span>
          </p>
      </li>
    </Link>
  </div>
);
```
