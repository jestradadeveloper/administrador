require 'rails_helper'

describe 'User authentication JWT' do
  it "route to /api/v1/auth/login authentication#login" do
    expect(post: "/api/v1/auth/login").to route_to(format:'json', controller:'api/v1/authentication', action:"login")
  end
end