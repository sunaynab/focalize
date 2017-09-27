export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};

export const updateUser = (image, userId) => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: image
  })
);
