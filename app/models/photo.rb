class Photo < ApplicationRecord
  validates :owner_id, :title, presence: true
  validates :img_url, presence: { message: 'Image Can\'t be Empty'}



  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many :comments,
    foreign_key: :photo_id,
    class_name: :Comment

  has_many :album_photos, dependent: :destroy
  has_many :albums, through: :album_photos

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

end
