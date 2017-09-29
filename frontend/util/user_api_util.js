export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};

export const fetchUsers = () => (
  $.ajax({
    method: "GET",
    url: `api/users`
  })
);

export const updateUser = (image, userId) => (
  $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: image
  })
);

export const unfollow = (user_following_id) => (
  $.ajax({
    method: "DELETE",
    url: `api/users/${user_following_id}/unfollow/`,
    data: {follow: {user_following_id}}
  })
);

export const follow = user_following_id => (
  $.ajax({
    method: "POST",
    url: `api/users/${user_following_id}/follow`,
    data: {follow: {user_following_id}}
  })
);
