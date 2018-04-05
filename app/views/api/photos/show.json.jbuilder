json.set! @photo.id do
  json.id @photo.id
  json.imageUrl @photo.img_url
  json.ownerId @photo.owner_id
  json.title @photo.title
  json.description @photo.description
end
