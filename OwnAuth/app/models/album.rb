class Album < ActiveRecord::Base
  belongs_to :band,
    class_name: 'Band',
    primary_key: :id,
    foreign_key: :band_id,
    dependent: :destroy

  has_many :tracks
end
