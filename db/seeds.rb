# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: "roni", email: "roni", password: "123456");
User.create(username: "Chris", email: "chris@gmail.com", password: "password");
User.create(username: "Alan", email: "Alan@gmail.com", password: "password");
User.create(username: "anna", email: "anna@gmail.com", password: "password");
User.create(username: "cody", email: "cody@gmail.com", password: "password");


Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877122/dorian-baumann-414610-unsplash.jpg",
             owner_id: 1 , title: "Mountain",  description: "The highest mountain")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/mihail-macri-541054-unsplash.jpg",
             owner_id: 2 , title: "walking alone",  description: "alone")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/jairph-390979-unsplash.jpg",
             owner_id: 3, title: "sky",  description: "In the sky")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877114/clem-onojeghuo-99399-unsplash.jpg",
             owner_id: 4, title: "Coffe" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877114/dylan-hooper-517507-unsplash.jpg",
             owner_id: 5, title: "Surfing")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877102/sead-dedic-577948-unsplash.jpg",
             owner_id: 1, title: "pictures in the snow" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877084/yeshi-kangrang-258234-unsplash.jpg",
             owner_id: 2, title: "upside down question" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877063/yeshi-kangrang-270514-unsplash.jpg",
             owner_id: 2, title: "on top",  description: "On top" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/andrew-gloor-576199-unsplash.jpg",
             owner_id: 3, title: "tree",  description: "tree")
