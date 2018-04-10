@photos.each do |photo|
  json.set! photo.id do
    json.id photo.id
    json.imageUrl photo.img_url
    json.ownerId photo.owner_id
    json.title photo.title
    json.description photo.description
    json.username photo.user.username

    json.albums photo.albums.pluck(:id)
  end
end
