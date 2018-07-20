json.photo do
  json.id @photo.id
  json.imageUrl @photo.img_url
  json.ownerId @photo.owner_id
  json.title @photo.title
  json.description @photo.description

  json.albums @photo.albums.pluck(:id)
  json.comments @photo.comments.pluck(:id)
  json.tags @photo.tags.pluck(:id)
end

json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.id comment.id
      json.body comment.body
      json.authorId comment.author_id
      json.authorImg comment.user.img_url
      json.authorName comment.user.username
      json.photoId comment.photo_id
    end
  end
end

json.albums do
  @photo.albums.each do |album|
    json.set! album.id do
      json.id album.id
      json.title album.title
      json.ownerId album.owner_id
      json.photos album.photos.pluck(:id)
    end
  end
end

json.tags do
  @photo.tags.each do |tag|
    json.set! tag.id do
      json.id tag.id
      json.tagName tag.tag_name
      json.photoId tag.taggings.pluck(:photo_id)
    end
  end
end


json.user do
  json.id @photo.user.id
  json.imageUrl @photo.user.img_url
  json.username @photo.user.username
  json.email @photo.user.email
end
