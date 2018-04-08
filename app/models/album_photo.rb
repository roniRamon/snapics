class AlbumPhoto < ApplicationRecord
  validates :album_id, :photo_id, presence: true
  validates :photo_id, uniqueness: { scope: :album_id }

  belongs_to :album
  belongs_to :photo
end
