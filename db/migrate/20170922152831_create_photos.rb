class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :image_url, null: false
      t.string :user_id, null: false
      t.timestamps
    end
    add_index :photos, :image_url
    add_index :photos, :user_id
  end
end
