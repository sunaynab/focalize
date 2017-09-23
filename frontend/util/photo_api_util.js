export const fetchUserPhotos = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/photos/`
  })
);

export const fetchPhotos = () => (
  $.ajax({
    method: "GET",
    url: "api/users/photos"
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
    data: {photo}
  })
);

export const deletePhoto = photo => (
  $.ajax({
    method: "DELETE",
    url: `api/photos/${photo.id}`
  })
);
