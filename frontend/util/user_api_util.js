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

export const unfollow = (userId, followId) => (
  $.ajax({
    method: "DELETE",
    url: `api/users/${userId}/follows/${followId}`
  })
);

export const follow = user_following_id => (
  $.ajax({
    method: "POST",
    url: `api/users/${user_following_id}/follows`,
    data: {follow: {user_following_id}}
  })
);
