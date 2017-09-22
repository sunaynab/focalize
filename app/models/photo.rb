# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  image_url  :string           not null
#  user_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :image_url, presence: true, uniqueness: true
  validates :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
