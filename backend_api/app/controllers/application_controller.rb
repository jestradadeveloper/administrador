class ApplicationController < ActionController::API
  include ExceptionHandler
  before_action :autenticate_request

  def autenticate_request
    header = request.headers['Authorization']
    return nil if header.nil?
    header = header.split(' ').last if header
    decoded = JsonWebToken.decode(header)
    @current_user = User.find(decoded[:user_id]) rescue ActiveRecord::RecordNotFound
  end
end
