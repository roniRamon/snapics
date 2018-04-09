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
      json.photos album.photos.pluck(:id)
    end
  end
end
