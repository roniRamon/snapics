class Photo < ApplicationRecord
  validates :img_url, :owner_id, :title, presence: true

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many :album_photos, dependent: :destroy
  has_many :albums, through: :album_photos

end
