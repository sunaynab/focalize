# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  password_digest   :string           not null
#  email             :string           not null
#  session_token     :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  profile_image_url :string
#

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_many :photos,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Photo

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


  private

  def generate_unique_session_token
    self.session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
