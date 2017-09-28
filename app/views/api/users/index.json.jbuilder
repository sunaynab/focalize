@users.each do |user|
  unless user.photos.empty? || user == current_user
    json.set! user.id do
      json.partial! "api/users/user", user: user
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
  end
end
