class CreateFollows < ActiveRecord::Migration[5.1]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :user_following_id, null: false
      t.timestamps
    end

    add_index :follows, :follower_id
    add_index :follows, :user_following_id
  end
end
