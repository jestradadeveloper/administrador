# frozen_string_literal: true
module Api
  module V1
    class AuthenticationController < ApplicationController
      #skip_before_action :autenticate_request

      # POST /api/v1/auth/login
      def login
        @user = User.find_by_email(params[:email])
        if @user&.authenticate(params[:password])
          token = JsonWebToken.encode(user_id: @user.id)
          render json: { token: token, user: { name:@user.name, email: @user.email, role: 'admin', english_level: @user.english_level, technical_knowledge: @user.technical_knowledge, resume_link: @user.resume_link} }, status: :ok
        else
          render json: { error: 'Unauthorized invalid credentials' }, status: :unauthorized
        end
      end
      def verify_token
        token = params[:tokenGuardado]
        render json: { token: token , user: { email: 'yo', role: 'admin'} }, status: :ok
      end

      private

      def login_params
        params.permit(:email, :password)
      end
    end
  end
end