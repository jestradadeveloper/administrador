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
class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :start_date, :end_date, :responsible, :account,:people
  belongs_to :creator
  belongs_to :account
  has_many :participants
  def responsible
    object.creator.name
  end
  def end_date
    object.end_date.strftime("%B %d, %Y")
  end
  def start_date
    object.end_date.strftime("%B %d, %Y")
  end
  def people
    object.participants.count
  end
  def account
     !object.account.nil? ? object.account.name : 'unassinged'
  end
end
