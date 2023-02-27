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
require 'rails_helper'

RSpec.describe Team, type: :model do
  describe 'Account model validations' do
    subject { build(:team) }
    context 'Data presence' do
      it 'Name should be present' do
        should validate_presence_of(:name)
      end
      it 'Start_date should be present' do
        should validate_presence_of(:start_date)
      end
      it 'End_date should be present' do
        should validate_presence_of(:end_date)
      end
    end
    context 'Relationships' do
      it 'Team belongs to a creator' do
        should belong_to(:creator)
      end
      it 'Team has many members' do
        should have_many(:members)
      end
      it 'Team has one account' do
        should have_one(:account)
      end
    end
  end
end
