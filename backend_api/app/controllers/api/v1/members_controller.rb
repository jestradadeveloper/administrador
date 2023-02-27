class Api::V1::MembersController < ApplicationController
  before_action :set_team, only: %i[ show update destroy ]
  def index
    @member = Member.all
    render json: @member, status: :ok
  end
  def show
    render json: @member, status: :ok
  end
  private 
  def set_team
    @member = Member.find(params[:id])
  end
end
