class Comment < ApplicationRecord
  validates :body, :author_id, :photo_id, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :photo,
    foreign_key: :photo_id,
    class_name: :Photo
end
