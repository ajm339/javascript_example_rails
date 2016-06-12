class TestDatum < ActiveRecord::Base
  validates :name, presence: true
  validates :rank, presence: true
end
