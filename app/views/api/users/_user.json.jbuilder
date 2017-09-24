json.extract! user, :id, :username
json.profile_image_url asset_path(user.image.url)
