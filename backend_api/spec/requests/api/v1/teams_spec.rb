require "swagger_helper"

RSpec.describe "api/v1/teams", type: :request do
  let(:team) { create(:team) }
  path "/api/v1/teams" do
    get("list teams") do
      tags "Teams"
      produces "application/json"
      security [Bearer: {}]
      response(200, "successful") { run_test! }
    end

    post("create team") do
      tags "Teams"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/team",
                }
      produces "application/json"
      consumes "application/json"
      security [Bearer: {}]
      response(201, "successful") do
        let(:user) { create(:user) }
        let(:team) { create(:team) }
        let(:payload) do
          {
            team: {
              name: team.name,
              start_date: team.end_date,
              end_date: team.end_date,
              description: team.description,
              user_id: user.id,
            },
          }
        end
        run_test!
      end
    end
  end

  path "/api/v1/teams/{id}" do
    # You'll want to customize the parameter types...
    parameter name: "id", in: :path, type: :string, description: "id"

    get("show team") do
      tags "Teams"
      produces "application/json"
      security [Bearer: {}]
      response(200, "successful") do
        let(:team) { create(:team) }
        let(:id) { team.id }

        run_test!
      end
    end

    patch("update team") do
      tags "Teams"
      parameter name: "id", in: :path, description: "Team ID"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/team",
                }
      consumes "application/json"
      produces "application/json"
      security [Bearer: {}]

      response(200, "successful") do
        let(:id) { team.id }
        let(:payload) { { team: team } }
        run_test!
      end
    end

    put("update team") do
      tags "Teams"
      parameter name: "id", in: :path, description: "Team ID"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/team",
                }
      consumes "application/json"
      produces "application/json"
      security [Bearer: {}]
      response(200, "successful") do
        let(:id) { team.id }
        let(:payload) { { team: team } }
        run_test!
      end
    end

    delete("delete team") do
      tags "Teams"
      parameter name: "id", in: :path, description: "Team ID"
      security [Bearer: {}]
      response(204, "successful") do
        let(:id) { team.id }

        run_test!
      end
    end
  end
end
