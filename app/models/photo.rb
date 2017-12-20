# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  user_id            :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ApplicationRecord
  validates :user_id, presence: true
  validates :image, presence: true

  has_attached_file :image, 
  :url =>':s3_domain_url',
  :path => '/:class/:attachment/:id_partition/:style/:filename'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
end
