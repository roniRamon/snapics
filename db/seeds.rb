# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)














User.create(username: "Colin Greene", email: "colinGreen@gmail.com", password: "123456");
User.create(username: "Liam	Simpson", email: "liamsimpson@gmail.com", password: "password");
User.create(username: "David Scott", email: "davids@gmail.com", password: "password");
User.create(username: "Anna	Young", email: "Anna_young@gmail.com", password: "password");
User.create(username: "Kevin Rutherford", email: "rutherford@gmail.com", password: "password");
User.create(username: "Leah Vance", email: "leahvance@gmail.com", password: "password");
User.create(username: "Brian Buckland", email: "bbuckland@gmail.com", password: "password");
User.create(username: "David Scott", email: "Scott@gmail.com", password: "password");
User.create(username: "Brian Campbell", email: "CampbellB@gmail.com", password: "password");
User.create(username: "Christopher Mitchell", email: "christopher@gmail.com", password: "password");


Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877122/dorian-baumann-414610-unsplash.jpg",
             owner_id: 1 , title: "Mountain",  description: "The highest mountain")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877102/sead-dedic-577948-unsplash.jpg",
             owner_id: 1, title: "pictures in the snow" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/mihail-macri-541054-unsplash.jpg",
             owner_id: 2 , title: "walking alone",  description: "alone")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877084/yeshi-kangrang-258234-unsplash.jpg",
            owner_id: 2, title: "upside down question" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877063/yeshi-kangrang-270514-unsplash.jpg",
            owner_id: 2, title: "on top",  description: "On top" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/jairph-390979-unsplash.jpg",
             owner_id: 3, title: "sky",  description: "In the sky")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/andrew-gloor-576199-unsplash.jpg",
          owner_id: 3, title: "tree",  description: "tree")
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877114/clem-onojeghuo-99399-unsplash.jpg",
             owner_id: 4, title: "Coffe" )
Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877114/dylan-hooper-517507-unsplash.jpg",
             owner_id: 5, title: "Surfing")


Album.create(owner_id: 1,title: 'Wildlife')
Album.create(owner_id: 1,title: 'Landscapes')
Album.create(owner_id: 1,title: 'Black and White')
Album.create(owner_id: 2,title: 'NYC')
Album.create(owner_id: 2,title: "My fave's")
Album.create(owner_id: 3,title: 'Portraits')
Album.create(owner_id: 3,title: 'Architecture')
Album.create(owner_id: 3,title: 'Sunrise & Sunsets')
Album.create(owner_id: 4,title: 'General')
Album.create(owner_id: 4,title: 'United States')
Album.create(owner_id: 5,title: 'Spain')

AlbumPhoto.create(album_id: 1,photo_id: 1)
AlbumPhoto.create(album_id: 2,photo_id: 2)
AlbumPhoto.create(album_id: 4,photo_id: 3)
AlbumPhoto.create(album_id: 5,photo_id: 4)
AlbumPhoto.create(album_id: 5,photo_id: 5)
AlbumPhoto.create(album_id: 6,photo_id: 6)
AlbumPhoto.create(album_id: 6,photo_id: 7)
