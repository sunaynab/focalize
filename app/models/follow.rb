# == Schema Information
#
# Table name: follows
#
#  id                :integer          not null, primary key
#  follower_id       :integer          not null
#  user_following_id :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

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
