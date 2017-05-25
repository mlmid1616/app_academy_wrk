class CreateAddIndexToUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :add_index_to_users do |t|
      add_index :users, :session_token
    end
  end
end
