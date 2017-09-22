const fetchPhotos = () => (
  $.ajax({
    method: "GET",
    url: "api/photos"
  })
);

const fetchPhoto = id => (
  $.ajax({
    method: "GET",
    url: `api/photos/${id}`
  })
);

const addPhoto = photo => (
  $.ajax({
    method: "POST",
    url: `api/photos`,
    data: {photo}
  })
);

const deletePhoto = photo => (
  $.ajax({
    method: "DELETE",
    url: `api/photos/${photo.id}`
  })
);
