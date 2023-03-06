# frozen_string_literal: true
module Api
  module V1
    class AuthenticationController < ApplicationController
      skip_before_action :authenticate_request!, only: [:login]

      # POST /api/v1/auth/login
      def login
        @user = User.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
          token = JsonWebToken.encode(user_id: @user.id)
          render json: {
                   token: token,
                   user: {
                     userId: @user.id,
                     email: @user.email,
                     role: "admin",
                   },
                 },
                 status: :ok
        else
          render json: {
                   error: "Unauthorized invalid credentials",
                 },
                 status: :unauthorized
        end
      end

      def verify_token
        token = params[:token]
        decoded = JsonWebToken.decode(token)
        @current_user = User.find(decoded[:user_id])
        render json: {
                 token: token,
                 user: {
                   email: @current_user.email,
                   role: "admin",
                 },
               },
               status: :ok
      end

      private

      def login_params
        params.permit(:email, :password)
      end
    end
  end
end
