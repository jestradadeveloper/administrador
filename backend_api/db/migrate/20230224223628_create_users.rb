class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :english_level
      t.text :technical_knowledge
      t.string :resume_link

      t.timestamps
    end
  end
end
