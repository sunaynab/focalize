class Follow < ApplicationRecord
  validates :user_following_id, :follower_id, presence: true
  validates :user_following_id, uniqueness: {scope: :follower_id}

  belongs_to :following_user,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: :User

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :user_following_id,
  class_name: :User
end
