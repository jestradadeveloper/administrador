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
    object.creator.email
  end
  def participants
    object.participants
  end
  def end_date
    object.end_date.strftime("%Y-%m-%d")
  end
  def start_date
    object.start_date.strftime("%Y-%m-%d")
  end
  def people
    object.participants.group_by(&:id).count
  end
  def account
     !object.account.nil? ? object.account.name : 'unassinged'
  end
end
