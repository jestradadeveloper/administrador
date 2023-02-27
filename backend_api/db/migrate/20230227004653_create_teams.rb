class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.text :description
      t.datetime :start_date
      t.datetime :end_date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
    add_index(:teams, :name)
    add_index(:teams, :start_date)
    add_index(:teams, :end_date)
  end
end
