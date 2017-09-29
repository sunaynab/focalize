
## Focalize
 [Focalize Live Demo](https://focalize.herokuapp.com/)

Focalize is a photo-sharing website inspired by 500px. Users are able to share their best photos and find inspiration from other users' photos.

After signing up for an account, users are able to:

* discover/follow other users via the following page
* view photos from users they are following via the feed page
* view the photos they have shared via their profile page

## Overall Structure

### Backend

This app was built with Ruby on Rails and PostgreSQL on the backend. Requests for data for the frontend were made through AJAX and fulfilled by JBuilder.

### Frontend

The frontend was created through the use of React.js and Redux.

## Libraries

* BCrypt as a method of achieving secure authentication through password-salting and hashing
* Paperclip - used to store images to Amazon Web Services
* Figaro - to secure api keys with Amazon Web Services
* React-Modal - utilized to create modals for uploading images
* React-Dropzone - allows users to drop files into the modal when uploading images
* animate.css - sign-in/sign-out form animations
* Amazon Web Services used to store all uploaded images.

## Features

### Profile

Each user's profile page includes:

* a grid featuring all of their shared photos
* statistics regarding the number of followers/following
* profile photo
* option to delete photos
* option to share photos

Delete buttons were mapped to each photo in order to provide an easy and simple way for users to delete any shared photos.

```
photoLinks() {
  let deleteButton;
  if (this.props.photos.length !== 0){
    deleteButton = this.deleteButton;
  }
  const links = this.props.photos.map(photo => (
    <div key={`div${photo.id}`} className="photo-links grid-item">
      <Link key={`photo${photo.id}`}className="zoom" to={`/photos/${photo.id}`}>
        <img key={`pic${photo.id}`}src={photo.image_url}></img>
      </Link>
        {deleteButton(photo.id)}
    </div>
  ));

  return links;
}

```

Modals were implemented in order to allow users to upload their own photos and profile photos when viewing their profile page.

### Feed Page

Includes photos of users the current user is folllowing.
The filtering of photos was handled on the backend through associations.

### Following Page

Includes up to 5 random users and one random picture shared by each user. Intended for users to discover other users that they may wish to follow.

## Future Features

* UI enhancements
* Users can like photos
* Modal displaying users followers and users they are following
