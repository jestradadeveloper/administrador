require "swagger_helper"

RSpec.describe "api/v1/users", type: :request do
  path "/api/v1/users" do
    get("list users") do
      tags "Users"
      security [Bearer: {}]
      produces "application/json"
      let!(:users) { 3.times { create(:user) } }
      response(200, "successful") do
        it "Return 3 users" do
          body = JSON(response.body)
          expect(body.count).to eq(1)
        end
        run_test!
      end
    end
  end
  path "/api/v1/users" do
    post("create user") do
      tags "Users"
      security [Bearer: {}]
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/user",
                }
      consumes "application/json"
      response(201, "successful") do
        let(:payload) do
          { user: { email: "email@test.com", password: "123456" } }
        end
        run_test!
      end
    end
  end

  path "/api/v1/users/{id}" do
    parameter name: "id", in: :path, description: "id"
    get("show user") do
      tags "Users"
      security [Bearer: {}]
      response(200, "successful") do
        let(:user) { create(:user) }
        let(:id) { user.id }
        run_test!
      end
    end

    patch("update user") do
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/user",
                }
      consumes "application/json"
      produces "application/json"
      tags "Users"
      security [Bearer: {}]
      parameter name: "id", in: :path, description: "User ID"
      let(:user_1) { create(:user) }
      response(200, "successful") do
        let(:id) { user_1.id }
        let(:payload) { { user: user_1 } }
        run_test!
      end
    end

    put(summary: "Update User") do
      parameter name: "id", in: :path, description: "User ID"
      parameter name: "payload",
                in: :body,
                schema: {
                  "$ref" => "#/components/schemas/user",
                }
      consumes "application/json"
      produces "application/json"
      tags "Users"
      security [Bearer: {}]
      response(200, description: "User updated") do
        let(:id) { "1" }

        let(:payload) do
          { user: { name: "Chema", email: "hello@arkusnexus.com" } }
        end
      end
    end
    delete("delete user") do
      tags "Users"
      security [Bearer: {}]
      response(204, "successful") do
        let(:user) { create(:user) }
        let(:id) { user.id }
        run_test!
      end
    end
  end
end
