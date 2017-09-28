# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
user2 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
user3 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
user4 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
user5 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
user6 = User.create(username: Faker::Internet.user_name, email: Faker::Internet.email, password: "password")
demoUser = User.create(username: "demoUser", email: 'demosareawesome@email.com', password: "demosarecool")

Follow.destroy_all
follow1 = Follow.create(follower_id: user2.id, user_following_id: user1.id)
follow2 = Follow.create(follower_id: user3.id, user_following_id: user6.id)
follow3 = Follow.create(follower_id: user3.id, user_following_id: user4.id)
follow4 = Follow.create(follower_id: demoUser.id, user_following_id: user3.id)
follow5 = Follow.create(follower_id: user3.id, user_following_id: demoUser.id)
follow6 = Follow.create(follower_id: demoUser.id, user_following_id: user2.id)
follow7 = Follow.create(follower_id: user2.id, user_following_id: demoUser.id)
follow8 = Follow.create(follower_id: user5.id, user_following_id: demoUser.id)
follow9 = Follow.create(follower_id: user6.id, user_following_id: demoUser.id)
follow10 = Follow.create(follower_id: user1.id, user_following_id: demoUser.id)
