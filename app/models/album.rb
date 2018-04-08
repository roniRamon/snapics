class Album < ApplicationRecord
  validates :owner_id, :title, presence: true

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many :album_photos, dependent: :destroy
  has_many :photos, through: :album_photos
end
