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
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :english_level, :resume_link, :technical_knowledge
  has_many :accounts
  has_many :teams
end
