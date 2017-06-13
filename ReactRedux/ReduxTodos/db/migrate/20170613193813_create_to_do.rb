class CreateToDo < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.string :title
      t.string :body
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
