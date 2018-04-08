json.photo do
  json.id @photo.id
  json.imageUrl @photo.img_url
  json.ownerId @photo.owner_id
  json.title @photo.title
  json.description @photo.description

  json.albums @photo.albums.pluck(:id)
end

json.user do
  json.id @photo.user.id
  json.imageUrl @photo.user.img_url
  json.username @photo.user.username
  json.email @photo.user.email
end
