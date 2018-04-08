class Album < ApplicationRecord
  validates :owner_id, :title, presence: true

  has_many :photos, through: :album_photos
  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User
end
