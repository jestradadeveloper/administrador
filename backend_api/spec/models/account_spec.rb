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
require 'rails_helper'

RSpec.describe Account, type: :model do
  describe 'Account model validations' do
    subject { create(:account) }
    context 'Data presence' do
      it 'Name should be present' do
        should validate_presence_of(:name)
      end
      it 'Client should be present' do
        should validate_presence_of(:client)
      end
    end
    context 'Relationships' do
      it { should belong_to(:team) }
      it { should belong_to(:creator) }
    end
  end
end
