class HealthChecksController < ApplicationController
  def index
    render(json: { time: Time.now.utc })
  end
end
