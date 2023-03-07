require "swagger_helper"

RSpec.describe "api/v1/auth/login", type: :request do
  let(:user) { create(:user) }
  path "/api/v1/auth/login" do
    post("create user login jwt response ok") do
      tags "Authentication"
      parameter name: "auth",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/auth",
                }
      consumes "application/json"
      produces "application/json"
      let(:user_created) { create(:user) }
      response(200, "successful") do
        let(:user) do
          { email: user_created.email, password: user_created.password }
        end
        run_test!
      end
    end
  end
end
