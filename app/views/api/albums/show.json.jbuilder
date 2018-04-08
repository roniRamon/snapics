json.id @album.id
json.title @album.title
json.ownerId @album.owner_id
json.photos @album.photos.pluck(:id)
