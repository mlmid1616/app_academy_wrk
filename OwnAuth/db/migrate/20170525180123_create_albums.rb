class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.integer :band_id, null: false
      t.string :style, null: false

      t.timestamps
    end
  end
end

# Have a drop-down to select which Band recorded the Album. Use selected to default-select the appropriate Band in the drop-down.
# Use radio buttons to select whether the album is a live or studio album. Don't use a column named type, since Rails uses this for a special purpose and everything will break. Use checked to default select the appropriate value.
