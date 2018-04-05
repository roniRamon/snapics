class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :img_url, null: false
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps
    end
  end
end
