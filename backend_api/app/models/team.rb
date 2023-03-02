# == Schema Information
#
# Table name: teams
#
#  id          :bigint           not null, primary key
#  description :text
#  end_date    :datetime
#  name        :string
#  start_date  :datetime
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :bigint           not null
#
# Indexes
#
#  index_teams_on_end_date    (end_date)
#  index_teams_on_name        (name)
#  index_teams_on_start_date  (start_date)
#  index_teams_on_user_id     (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Team < ApplicationRecord
  include OrderableByTimestamp
  belongs_to :creator, class_name: 'User', foreign_key: 'user_id'
  has_one :account, inverse_of: :team
  has_many :members, inverse_of: :participant, dependent: :destroy
  has_many :participants, through: :members, dependent: :destroy
  validates :name, :start_date, :end_date, presence: true
  
end
