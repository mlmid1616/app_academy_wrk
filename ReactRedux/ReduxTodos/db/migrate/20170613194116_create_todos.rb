class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title
      t.string :body
      t.boolean :done, default: false

      t.timestamps null: false
    end
  end
end
