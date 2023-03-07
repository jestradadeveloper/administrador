require "swagger_helper"

RSpec.describe "api/v1/accounts", type: :request do
  let(:account) { create(:account) }
  path "/api/v1/accounts" do
    get("list accounts") do
      tags "Accounts"
      produces "application/json"
      security [Bearer: {}]
      response(200, "successful") { run_test! }
    end

    post("create account") do
      tags "Accounts"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/account",
                }
      produces "application/json"
      consumes "application/json"
      security [Bearer: {}]

      response(201, "successful") do
        let(:user) { create(:user) }
        let(:team) { create(:team) }
        let(:payload) do
          {
            account: {
              name: "email@test.com",
              client: "client name",
              user_id: user.id,
              team_id: team.id,
            },
          }
        end
        run_test!
      end
    end
  end

  path "/api/v1/accounts/{id}" do
    # You'll want to customize the parameter types...
    parameter name: "id", in: :path, type: :string, description: "id"

    get("show account") do
      tags "Accounts"
      security [Bearer: {}]
      response(200, "successful") do
        let(:account) { create(:account) }
        let(:id) { account.id }

        run_test!
      end
    end

    patch("update account") do
      tags "Accounts"
      parameter name: "id", in: :path, description: "Account ID"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/account",
                }
      consumes "application/json"
      produces "application/json"
      security [Bearer: {}]
      response(200, "successful") do
        let(:id) { account.id }
        let(:payload) { { account: account } }

        run_test!
      end
    end

    put("update account") do
      tags "Accounts"
      parameter name: "id", in: :path, description: "Account ID"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/account",
                }
      consumes "application/json"
      produces "application/json"
      security [Bearer: {}]
      response(200, "successful") do
        let(:id) { account.id }
        let(:payload) { { account: account } }
        run_test!
      end
    end

    delete("delete account") do
      tags "Accounts"
      security [Bearer: {}]
      parameter name: "id", in: :path, description: "Account ID"
      response(204, "successful") do
        let(:id) { account.id }

        run_test!
      end
    end
  end
end
