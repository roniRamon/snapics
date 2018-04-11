class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniqueness: true
  validates :email, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  # still need to handle img_url validation - if setting it to null: false

  attr_reader :password

  has_many :photos,
    foreign_key: :owner_id,
    class_name: :Photo

  has_many :albums,
      foreign_key: :owner_id,
      class_name: :Album

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment

  after_initialize :set_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def set_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
