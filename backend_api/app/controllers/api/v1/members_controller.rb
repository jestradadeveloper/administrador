class Api::V1::MembersController < ApplicationController
  before_action :set_team, only: %i[show update destroy create]
  def index
    @member = Member.all
    render json: @member, status: :ok
  end
  def create
    user_ids = params[:member][:user_ids]
    user_ids.each do |user_id|
      user_id.to_sym
      @member = Member.find_or_create_by!(user_id: user_id, team_id: @team.id)
    end

    if @team.participants
      render json: @team.participants, status: 201
    else
      render json: { errors: @members.errors }, status: 422
    end
  end
  def destroy
    @user = User.find(params[:member][:user_id])
    @team.participants.delete(@user)
    head :no_content
  end
  def show
    render json: @member, status: :ok
  end

  private

  def set_team
    @team = Team.find(params[:member][:team_id])
  end
  def member_params
    params.require(:member).permit(:team_id, :user_id, user_ids: [])
  end
end
