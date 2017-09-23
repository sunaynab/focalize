# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: "sunayna", email: "sunayna", password: "sunayna")
user2 = User.create(username: "reactredux", email: "reactredux", password: "reactredux")
demoUser = User.create(username: "demoUser", email: 'demosareawesome@email.com', password: "demosarecool")
user3 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password)
user4 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password)
user5 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password)
user6 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password)
user7 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password)
user8 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: Faker::Internet.password)

Photo.destroy_all
photo1 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user1.id)
photo2 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user2.id)
photo3 = Photo.create(image_url: Faker::LoremPixel.image, user_id: demoUser.id)
photo4 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user4.id)
photo5 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user7.id)
photo6 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user8.id)
photo7 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user3.id)
photo8 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo9 = Photo.create(image_url: Faker::LoremPixel.image("90x60"), user_id: user5.id)
photo10 = Photo.create(image_url: Faker::LoremPixel.image("50x90"), user_id: user5.id)
photo11 = Photo.create(image_url: Faker::LoremPixel.image("50x100"), user_id: user5.id)
photo12 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo13 = Photo.create(image_url: Faker::LoremPixel.image("50x70"), user_id: user5.id)
photo14 = Photo.create(image_url: Faker::LoremPixel.image("50x20"), user_id: user5.id)
photo15 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo16 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo17 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo18 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo19 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo20 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user5.id)
photo21 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo22 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user5.id)
photo23 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo24 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user5.id)
photo25 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo26 = Photo.create(image_url: Faker::LoremPixel.image("50x60"), user_id: user5.id)
photo27 = Photo.create(image_url: Faker::LoremPixel.image, user_id: user5.id)
