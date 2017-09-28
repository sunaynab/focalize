json.extract! user, :id, :username
json.image_url asset_path(user.image.url)
json.followers_user_ids do
  json.array! user.follower_ids
end

json.following_user_ids do
  json.array! user.users_following_ids
end

if user.follower_ids.include?(current_user.id)
  json.current_user_follows "true"
else
  json.current_user_follows "false"
end
