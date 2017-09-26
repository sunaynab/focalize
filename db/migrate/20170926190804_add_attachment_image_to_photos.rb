class AddAttachmentImageToPhotos < ActiveRecord::Migration[5.1]
  def self.up
    change_table :photos do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :photos, :image
  end

  def change
    remove_column :photos, :image_url
  end

end