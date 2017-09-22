@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :user_id, :image_url
  end
end
