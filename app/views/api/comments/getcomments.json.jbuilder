@comment.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.authorId comment.author_id
    json.photoId comment.photo_id
  end
end
