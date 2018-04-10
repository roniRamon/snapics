json.user do
 json.id user.id
 json.username user.username
 json.img_url user.img_url
 json.email user.email

 json.albums user.albums.pluck(:id)
end

json.albums do
  user.albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.title album.title
      json.ownerId album.owner_id
      if album.photos.empty?
        json.photoCover "http://res.cloudinary.com/dhyya9rw1/image/upload/v1523300185/space-2638126_640.jpg"
      else
        json.photoCover album.photos.first.img_url
      end
      json.photos album.photos.pluck(:id)
    end
  end
end
