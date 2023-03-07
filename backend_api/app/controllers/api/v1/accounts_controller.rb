module Api
  module V1
    class AccountsController < ApplicationController
      before_action :set_account, only: %i[show update destroy]
      before_action :check_login, only: %i[index]
      # GET /accounts
      # GET /accounts.json
      def index
        @accounts = current_user.accounts
        render json: @accounts, status: :ok
      end

      # GET /accounts/1
      # GET /accounts/1.json
      def show
        render json: @account, status: :ok
      end

      # POST /accounts
      # POST /accounts.json
      def create
        @account = Account.new(account_params)

        if @account.save
          render json: @account, status: :created
        else
          render json: {
                   errors: @account.errors.messages,
                 },
                 status: :unprocessable_entity
        end
      end

      # PATCH/PUT /accounts/1
      # PATCH/PUT /accounts/1.json
      def update
        if @account.update(account_params)
          render json: @account, status: :ok
        else
          render json: @account.errors, status: :unprocessable_entity
        end
      end

      # DELETE /accounts/1
      # DELETE /accounts/1.json
      def destroy
        @account.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_account
        @account = Account.find(params[:id])
      end
      # Only allow a list of trusted parameters through.
      def account_params
        params.require(:account).permit(:name, :client, :user_id, :team_id)
      end
    end
  end
end
