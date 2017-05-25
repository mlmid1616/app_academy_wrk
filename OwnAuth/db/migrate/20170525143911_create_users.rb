class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true

  end
end


# In the users table, you'll want to store an email, password_digest and session_token. Make sure to add database constraints (require all fields), and indices to ensure uniqueness of emails and speed up the lookup by session_token.
