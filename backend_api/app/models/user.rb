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
class User < ApplicationRecord
  has_secure_password
  validates :email, :password_digest, presence: true
  validates :email,
            format: { with: URI::MailTo::EMAIL_REGEXP },
            uniqueness: true
  validates :password_digest,
            length: { minimum: 6 },
            if: -> { new_record? || !password.nil? }

  has_many :accounts, inverse_of: :creator, dependent: :destroy
  has_many :members, inverse_of: :participant, dependent: :destroy
  has_many :teams, through: :members
  
end
