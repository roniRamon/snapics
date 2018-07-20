json.tags do
  @tags.each do |tag|
    json.set! tag.id do
      json.id tag.id
      json.tagName tag.tag_name
      json.photoId tag.taggings.pluck(:photo_id)
    end
  end
end
