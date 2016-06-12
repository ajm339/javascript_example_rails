class CreateTestData < ActiveRecord::Migration
  def change
    create_table :test_data do |t|
      t.string :name
      t.integer :rank

      t.timestamps null: false
    end
  end
end
