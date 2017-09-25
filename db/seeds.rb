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
photo1 = Photo.create(image_url: 'https://images.unsplash.com/reserve/E5CwLOxQSFimIXJurfpq_IMG_6424%20(1).jpg?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: user1.id)
photo2 = Photo.create(image_url: 'https://images.unsplash.com/photo-1504681869696-d977211a5f4c?dpr=2&auto=format&fit=crop&w=1080&h=1923&q=80&cs=tinysrgb&crop=', user_id: user2.id)
photo3 = Photo.create(image_url: 'https://images.unsplash.com/photo-1490598000245-075175152d25?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: user5.id)
photo4 = Photo.create(image_url: 'https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: user4.id)
photo5 = Photo.create(image_url: 'https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=2&auto=format&fit=crop&w=1080&h=716&q=80&cs=tinysrgb&crop=', user_id: user7.id)
photo6 = Photo.create(image_url: 'https://images.unsplash.com/photo-1502119095323-253837f293f9?dpr=2&auto=format&fit=crop&w=1080&h=1620&q=80&cs=tinysrgb&crop=', user_id: user8.id)
photo7 = Photo.create(image_url: 'https://images.unsplash.com/photo-1495277493816-4c359911b7f1?dpr=2&auto=format&fit=crop&w=1080&h=725&q=80&cs=tinysrgb&crop=', user_id: user3.id)
photo8 = Photo.create(image_url: 'https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo9 = Photo.create(image_url: 'https://images.unsplash.com/photo-1461958723673-f65d980244f1?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo10 = Photo.create(image_url: 'https://images.unsplash.com/photo-1469204691332-56e068855403?dpr=2&auto=compress,format&fit=crop&w=991&h=661&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo11 = Photo.create(image_url: 'https://images.unsplash.com/photo-1496478981722-3ae516118a04?dpr=2&auto=format&fit=crop&w=1080&h=724&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo12 = Photo.create(image_url: 'https://images.unsplash.com/photo-1492799808351-30d7d3955cac?dpr=2&auto=compress,format&fit=crop&w=991&h=657&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo13 = Photo.create(image_url: 'https://images.unsplash.com/photo-1488393660112-976f752342de?dpr=2&auto=compress,format&fit=crop&w=991&h=941&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo14 = Photo.create(image_url: 'https://images.unsplash.com/photo-1500229285422-9508ce34dedc?dpr=2&auto=format&fit=crop&w=1080&h=715&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo15 = Photo.create(image_url: 'https://images.unsplash.com/photo-1488393660112-976f752342de?dpr=2&auto=compress,format&fit=crop&w=991&h=941&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo16 = Photo.create(image_url: 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo17 = Photo.create(image_url: 'https://images.unsplash.com/photo-1504881660250-ba2534397993?dpr=2&auto=format&fit=crop&w=1080&h=608&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo18 = Photo.create(image_url: 'https://images.unsplash.com/photo-1473256599800-b48c7c88cd7e?dpr=2&auto=format&fit=crop&w=1080&h=864&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo19 = Photo.create(image_url: 'https://images.unsplash.com/photo-1500877015165-e1fb7f2db007?dpr=2&auto=format&fit=crop&w=1080&h=1618&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo20 = Photo.create(image_url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo21 = Photo.create(image_url: 'https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?dpr=2&auto=format&fit=crop&w=1080&h=1152&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo22 = Photo.create(image_url: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?dpr=2&auto=format&fit=crop&w=1080&h=694&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo23 = Photo.create(image_url: 'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?dpr=2&auto=format&fit=crop&w=1080&h=608&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo24 = Photo.create(image_url: 'https://images.unsplash.com/photo-1494247622028-9a5bbfbf529a?dpr=2&auto=format&fit=crop&w=1080&h=719&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo25 = Photo.create(image_url: 'https://images.unsplash.com/photo-1465405092061-4db6005a2be0?dpr=2&auto=format&fit=crop&w=1080&h=1620&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo26 = Photo.create(image_url: 'https://images.unsplash.com/photo-1478028928718-7bfdb1b32095?dpr=2&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
photo27 = Photo.create(image_url: 'https://images.unsplash.com/photo-1488393660112-976f752342de?dpr=2&auto=compress,format&fit=crop&w=991&h=941&q=80&cs=tinysrgb&crop=', user_id: demoUser.id)
