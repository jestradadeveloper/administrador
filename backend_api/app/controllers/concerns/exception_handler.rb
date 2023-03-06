module ExceptionHandler
  extend ActiveSupport::Concern
  class DecodeError < StandardError; end
  class ExpiredSignature < StandardError; end
  included do
    ##rescue_from CanCan::AccessDenied do |_error|
    ##  render json: {
    ##    message: 'We are sorry, but you do not have permissions to perform this action.'
    ##  }, status: :unauthorized
    ##end
    rescue_from ActiveRecord::RecordNotFound do |error|
      render json: {
        message: error.message
      }, status: :unauthorized
    end
    rescue_from JWT::DecodeError do |_error|
      render json: {
        message: 'Access denied!. No token supplied.'
      }, status: :unauthorized
    end
    rescue_from ExceptionHandler::DecodeError do |_error|
      render json: {
        message: 'Access denied!. Invalid token supplied.'
      }, status: :unauthorized
    end
    rescue_from ExceptionHandler::ExpiredSignature do |_error|
      render json: {
        message: 'Access denied!. Token has expired.'
      }, status: :unauthorized
    end
  end
end
