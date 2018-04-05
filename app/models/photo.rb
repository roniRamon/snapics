class Photo < ApplicationRecord
  validates :img_url, :owner_id, :title, presence: true

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User
end
