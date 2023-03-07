module AuthenticateRequest
  extend ActiveSupport::Concern
  require "json_web_token"

  def authenticate_user
    unless current_user
      return render status: :unauthorized, json: { errors: "not authenticated" }
    end
  end

  def current_user
    return @current_user if @current_user
    if decoded_token
      data = decoded_token
      user = User.find_by(id: data[:user_id])
      @current_user ||= user if user
    end
  end

  def decoded_token
    header = request.headers["Authorization"]
    header = header.split(" ").last if header
    if header
      begin
        @decoded_token ||= JsonWebToken.decode(header)
      rescue Error => e
        return render json: { errors: [e.message] }, status: :unauthorized
      end
    end
  end
end
