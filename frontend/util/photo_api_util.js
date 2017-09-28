export const fetchUserPhotos = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/photos/`
  })
);

export const fetchPhotos = () => (
  $.ajax({
    method: "GET",
    url: "api/photos"
  })
);

export const fetchPhoto = id => (
  $.ajax({
    method: "GET",
    url: `api/photos/${id}`
  })
);

export const addPhoto = photo => (
  $.ajax({
    method: "POST",
    url: `api/photos`,
    contentType: false,
    processData: false,
    data: photo
  })
);

export const deletePhoto = id => (
  $.ajax({
    method: "DELETE",
    url: `api/photos/${id}`
  })
);

export const fetchUser = photo => (
  $.ajax({
    method: "GET",
    url: `api/users/${photo.user_id}`
  })
);
