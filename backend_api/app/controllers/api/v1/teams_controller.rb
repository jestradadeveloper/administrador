module Api
  module V1
    class TeamsController < ApplicationController
      before_action :set_team, only: %i[ show update destroy ]
      before_action :check_owner, only: %i[update destroy]
      before_action :authenticate_user, only: :destroy
      skip_before_action :autenticate_request, only: [:index]
      # GET /teams
      # GET /teams.json
      def index
        @teams = current_user.teams
        render json: @teams,
        include: params[:include]&.split(','),
        fields: params[:fields]&.as_json&.symbolize_keys&.transform_values { |value| value.split(',').map(&:to_sym) },
        status: :ok
      end

      # GET /teams/1
      # GET /teams/1.json
      def show
        render json: @team,
        include: params[:include]&.split(','),
        fields: params[:fields]&.as_json&.symbolize_keys&.transform_values { |value| value.split(',').map(&:to_sym) },
        status: :ok
      end

      # POST /teams
      # POST /teams.json
      def create
        @team = current_user.teams.build(team_params)
        if @team.save
          render json: @team, status: :created
        else
          render json: @team.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /teams/1
      # PATCH/PUT /teams/1.json
      def update
        if @team.update(team_params)
          render json: @team, status: :ok
        else
          render json: @team.errors, status: :unprocessable_entity
        end
      end

      # DELETE /teams/1
      # DELETE /teams/1.json
      def destroy
        @team.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_team
          @team = Team.find(params[:id])
        end
        def check_owner
          head :forbidden unless @team.user_id == current_user&.id
        end
        # Only allow a list of trusted parameters through.
        def team_params
          params.require(:team).permit(:name, :description, :start_date, :end_date, :user_id)
        end
    end
  end 
end