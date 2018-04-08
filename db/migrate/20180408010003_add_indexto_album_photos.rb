class AddIndextoAlbumPhotos < ActiveRecord::Migration[5.1]
  def change
    add_index :album_photos, :album_id
    add_index :album_photos, :photo_id
    add_index :album_photos, [:album_id, :photo_id], unique: true
  end
end
