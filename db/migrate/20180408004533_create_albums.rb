class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
