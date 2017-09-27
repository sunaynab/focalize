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
