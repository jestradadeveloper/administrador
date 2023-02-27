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
FactoryBot.define do
  factory :team do
    name {  Faker::Name.name }
    description { Faker::Lorem.sentence }
    start_date { Faker::Time.between(from: DateTime.now - 1, to: DateTime.now) }
    end_date { Faker::Time.between(from: DateTime.now, to: DateTime.now + 5.days) }
    association :creator, factory: :user
  end
end
