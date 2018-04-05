class AddDefaultValueToUserImage < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :img_url, :string, default: "http://res.cloudinary.com/dhyya9rw1/image/upload/v1522967154/polaroid.png" 
  end
end
