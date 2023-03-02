module Api
  module V1
    class UsersController < ApplicationController
      before_action :find_user,  only: [:show, :update, :destroy]
      # GET /api/v1/users
      def index
        @users = User.by_recently_created
        
        render json: @users, 
        include: params[:include]&.split(','),
        fields: params[:fields]&.as_json&.symbolize_keys&.transform_values { |value| value.split(',').map(&:to_sym) }, 
        status: :ok
      end

      # GET /api/v1/users/{userId}
      def show
        render json: @user,
        include: params[:include]&.split(','),
        fields: params[:fields]&.as_json&.symbolize_keys&.transform_values { |value| value.split(',').map(&:to_sym) }, 
        status: :ok
      end

      # POST /api/v1/users
      def create
        @user = User.new(user_params)
        if @user.valid?
          @user.save
          render json: @user, status: :created
        else
          render json: { errors: @user.errors.messages }, status: :bad_request
        end
      end

      # PUT /api/v1/users/{userId}
      def update
        if @user.update(user_params)
          render json: { message: 'Actualizado' },  status: :ok 
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /users/{userId}
      def destroy
        @user.destroy
        head :no_content
      end

      private
      def find_user
        @user = User.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: {errors: "User not found"}, status: :not_found
      end
      def user_params
        params.require(:user).permit(:name, :email, :password, :english_level,:technical_knowledge, :resume_link)
      end
    end
  end
end
