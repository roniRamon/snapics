class Tag < ApplicationRecord
  validates :tag_name, presence: true

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
end
