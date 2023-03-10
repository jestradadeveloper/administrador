class ApplicationController < ActionController::API
  include Authenticable
  before_action :authenticate_request!

  private

  def authenticate_request!
    token = request.headers["Authorization"]
    if token
      token = token.split(" ").last
      begin
        @decoded = decode_token(token)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
    else
      render json: {
               error: "No authorization token found",
             },
             status: :unauthorized
    end
  end

  # token decode secret
  SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

  # token decoder method
  def decode_token(token)
    decoded = JWT.decode(token, SECRET_KEY)[0]
    HashWithIndifferentAccess.new decoded
  end
end
