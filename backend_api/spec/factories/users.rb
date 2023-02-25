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
FactoryBot.define do
  factory :user do
    name { 'Jose Estrada' }
    email { Faker::Internet.email }
    password { Faker::Internet.password(min_length: 8)}
  end
end
