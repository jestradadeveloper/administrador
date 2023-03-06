# == Schema Information
#
# Table name: accounts
#
#  id         :bigint           not null, primary key
#  client     :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  team_id    :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_accounts_on_client   (client)
#  index_accounts_on_name     (name)
#  index_accounts_on_team_id  (team_id)
#  index_accounts_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (team_id => teams.id)
#  fk_rails_...  (user_id => users.id)
#
class Account < ApplicationRecord
  include OrderableByTimestamp
  belongs_to :creator, class_name: 'User', foreign_key: 'user_id'
  belongs_to :team, inverse_of: :account,  dependent: :destroy
  validates :client, :name, presence: true
end
