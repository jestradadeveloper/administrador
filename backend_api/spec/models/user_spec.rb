# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  email               :string
#  english_level       :string
#  name                :string
#  password_digest     :string
#  resume_link         :string
#  technical_knowledge :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'User model validations' do
    subject { build(:user) }
    it 'Email should be present' do
      should validate_presence_of(:email)
    end
    it 'Password should be present' do
      should validate_presence_of(:password_digest)
    end
    it 'Email should be a unique record' do
      should validate_uniqueness_of(:email)
    end
    it 'Email should not be a wrong email' do
      should_not allow_value('test').for(:email)
    end
    context 'Relationships' do
      it { should have_many(:members) }
      it { should have_many(:accounts) }
      it { should have_many(:teams) }
    end
  end
end
