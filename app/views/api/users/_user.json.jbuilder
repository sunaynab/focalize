json.extract! user, :id, :username
json.image_url asset_path(user.image.url)
json.followers_user_ids do
  json.array! user.followers.ids
end

json.following_user_ids do
  json.array! user.following_users.ids
end

if logged_in?
  if user.follower_ids.include?(current_user.id)
    json.current_user_follows "true"
  else
    json.current_user_follows "false"
  end
end

unless user.photos.empty? || user == current_user
  json.photos do
    photo = random_photo(user)
    unless photo.nil?
      json.set! photo.id do
        json.extract! photo, :id, :user_id
        json.image_url asset_path(photo.image.url)
      end
    end
  end
end
