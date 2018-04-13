# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "Colin Greene", email: "colinGreen@gmail.com", password: "123456", img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523643786/images.png");
user2 = User.create(username: "Liam	Simpson", email: "liamsimpson@gmail.com", password: "password", img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523643786/images_1.png");
user3 = User.create(username: "David Scott", email: "davids@gmail.com", password: "password", img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523321411/pretty_kitty_eopr2z.jpg");
user4 = User.create(username: "Anna	Young", email: "Anna_young@gmail.com", password: "password", img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523643786/download.png");
user5 = User.create(username: "Kevin Rutherford", email: "rutherford@gmail.com", password: "password", img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523209120/hands-holding-old-compass-style-antique-34300998-min_mzlwbn.jpg");
user6 = User.create(username: "Leah Vance", email: "leahvance@gmail.com", password: "password");
user7 = User.create(username: "Brian Buckland", email: "bbuckland@gmail.com", password: "password", img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523340462/watercolor_p08r48.jpg");
user8 = User.create(username: "David Scott", email: "Scott@gmail.com", password: "password");
user9 = User.create(username: "Brian Campbell", email: "CampbellB@gmail.com", password: "password");
user10 = User.create(username: "Christopher Mitchell", email: "christopher@gmail.com", password: "password");


p1 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877122/dorian-baumann-414610-unsplash.jpg",
             owner_id: user1.id , title: "Mountain",  description: "The highest mountain")
p1b = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877102/sead-dedic-577948-unsplash.jpg",
             owner_id: user1.id, title: "pictures in the snow" )
p1c = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/mihail-macri-541054-unsplash.jpg",
             owner_id: user1.id , title: "walking alone",  description: "alone")
p2 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877084/yeshi-kangrang-258234-unsplash.jpg",
            owner_id: user2.id, title: "upside down question" )
p2b = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877063/yeshi-kangrang-270514-unsplash.jpg",
            owner_id: user2.id, title: "on top",  description: "On top" )
p3 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/jairph-390979-unsplash.jpg",
             owner_id: user3.id, title: "sky",  description: "In the sky")
p3b = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877116/andrew-gloor-576199-unsplash.jpg",
          owner_id: user3.id, title: "tree",  description: "tree")
p4 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877114/clem-onojeghuo-99399-unsplash.jpg",
             owner_id: user4.id, title: "Coffe" )
p5 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522877114/dylan-hooper-517507-unsplash.jpg",
             owner_id: user5.id, title: "Surfing")
p5b = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523321968/honkers_auecwf.jpg",
            owner_id: user5.id , title: "View from my Window",  description: "shopping")
p6 =  Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523644337/adrian-infernus-539197-unsplash.jpg",
            owner_id: user6.id, title: "Bavarian Alps with foggy weather!" )
p6b =Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523644537/jon-flobrant-4056-unsplash.jpg",
            owner_id: user6.id , title: "New York, New York!!!",  description: "United States")
p7 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523644756/savs-511877-unsplash.jpg",
           owner_id: user7.id, title: "Sequoia National Park", description: "Foothills Visitor Center, Three Rivers, United States" )
p7b = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523644870/jeremy-bishop-549223-unsplash.jpg",
           owner_id: user7.id, title: "Alabama Hills, United States",  description: "A sigh of relief and relaxation came upon me after cooling down and finding a place to crash for the night. Places like like are what make road trips the best part." )
p8 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523645061/jay-wennington-13853-unsplash.jpg",
            owner_id: user8.id, title: "Dongmen station, Taiwan")
p9 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523645194/dollar-gill-389601-unsplash.jpg",
         owner_id: user9.id, title: "Patiala, India",  description: "This shot was taken accidentally while we were doing portraits shots but it came out to be one of our best Shots.")

p10 = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523645431/federico-beccari-544724-unsplash.jpg",
            owner_id: user10.id, title: "San Martino di Castrozza, Italy" )

p10b = Photo.create(img_url: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523645433/robert-trombetta-324640-unsplash.jpg",
            owner_id: user10.id, title: "Golden Gate Bridge")


album1 = Album.create(owner_id: user1.id,title: 'Wildlife')
album1b = Album.create(owner_id: user1.id,title: 'Landscapes')
album2 = Album.create(owner_id: user2.id,title: 'Black and White')
album3 = Album.create(owner_id: user3.id,title: 'NYC')
album4 = Album.create(owner_id: user4.id,title: "My fave's")
album4b = Album.create(owner_id: user4.id,title: 'Portraits')
album5 = Album.create(owner_id: user5.id,title: 'Architecture')
album5 = Album.create(owner_id: user5.id,title: 'Sunrise & Sunsets')
album7 = Album.create(owner_id: user7.id,title: 'General')
album6 = Album.create(owner_id: user6.id,title: 'United States')
album8 = Album.create(owner_id: user8.id,title: 'Spain')
album9 = Album.create(owner_id: user9.id,title: 'Wildlife')
album10 = Album.create(owner_id: user10.id,title: 'Landscapes')


AlbumPhoto.create(album_id: album1.id,photo_id: p1.id)
AlbumPhoto.create(album_id: album2.id,photo_id: p2.id)
AlbumPhoto.create(album_id: album4.id,photo_id: p4.id)
AlbumPhoto.create(album_id: album5.id,photo_id: p5.id)
AlbumPhoto.create(album_id: album5.id,photo_id: p5b.id)
AlbumPhoto.create(album_id: album6.id,photo_id: p6.id)
AlbumPhoto.create(album_id: album6.id,photo_id: p6b.id)



Comment.create(body: 'Great shot, well done', author_id: user10.id, photo_id: p2.id)
Comment.create(body: 'Amazing scenery! Splendid light and colors!', author_id: user2.id, photo_id: p1.id)
Comment.create(body: 'Beautiful capture', author_id: user8.id, photo_id: p1.id)
Comment.create(body: 'Thank you', author_id: user2.id, photo_id: p2.id)

Comment.create(body: 'Excellent shot', author_id: user6.id, photo_id: p3.id)
Comment.create(body: 'Very Nice', author_id:user7.id, photo_id: p4.id)
Comment.create(body: 'Like', author_id: user1.id, photo_id: p5.id)

Comment.create(body: 'Lovely work here ', author_id: user5.id, photo_id: p6.id)

Comment.create(body: 'Great shot, well done', author_id: user4.id, photo_id: p7.id)
Comment.create(body: 'Amazing scenery! Splendid light and colors!', author_id: user3.id, photo_id: p8.id)
Comment.create(body: 'Beautiful capture', author_id: user7.id, photo_id: p9.id)

Comment.create(body: 'Excellent shot', author_id: user9.id, photo_id: p10.id)
Comment.create(body: 'Very Nice', author_id: user6.id, photo_id: p3.id)
Comment.create(body: 'Like', author_id: user1.id, photo_id: p2.id )

Comment.create(body: 'Lovely work here ', author_id: user8.id, photo_id: p4.id)


t1= Tag.create(tag_name: 'Green')
t2 =Tag.create(tag_name: 'Sunrise')
t3= Tag.create(tag_name: 'Sky')
t4 =Tag.create(tag_name: 'explored')
t5 =Tag.create(tag_name: 'long exposure')
t6= Tag.create(tag_name: 'in explore')
t7 =Tag.create(tag_name: 'fog')
t8=Tag.create(tag_name: 'park')
t9= Tag.create(tag_name: 'morning')
t10 =Tag.create(tag_name: 'light')
t11 =Tag.create(tag_name: 'street')
t12 =Tag.create(tag_name: 'Mountain')
t13 =Tag.create(tag_name: 'walking')


Tagging.create(tag_id: t1.id, photo_id: p1.id)
Tagging.create(tag_id: t2.id, photo_id: p1.id)
Tagging.create(tag_id: t4.id, photo_id: p1b.id)
Tagging.create(tag_id: t13.id, photo_id: p1c.id)
Tagging.create(tag_id: t11.id, photo_id: p1c.id)
Tagging.create(tag_id: t4.id, photo_id: p2b.id)
Tagging.create(tag_id: t8.id, photo_id: p3.id)
Tagging.create(tag_id: t3.id, photo_id: p3b.id)
Tagging.create(tag_id: t1.id, photo_id: p4.id)
Tagging.create(tag_id: t2.id, photo_id: p5.id)
Tagging.create(tag_id: t5.id, photo_id: p6.id)
Tagging.create(tag_id: t6.id, photo_id: p7.id)
