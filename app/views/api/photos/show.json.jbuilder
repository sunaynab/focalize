json.extract! @photo, :id, :user_id
json.image_url asset_path(@photo.image.url)
