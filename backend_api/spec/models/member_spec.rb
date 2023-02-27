# == Schema Information
#
# Table name: members
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  team_id    :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_members_on_team_id  (team_id)
#  index_members_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (team_id => teams.id)
#  fk_rails_...  (user_id => users.id)
#
require 'rails_helper'

RSpec.describe Member, type: :model do
  describe 'Member model validations' do
    subject { build(:member) }
    context 'Relationships' do
      it { should belong_to(:team) }
      it { should belong_to(:participant) }
    end
  end
end
