module Api
  module V1
    class HealthChecksController < ApplicationController
      def index
        render json: { data: {status: 'online'} }, status: 200
      end
    end
  end
end