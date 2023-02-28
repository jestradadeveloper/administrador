require 'swagger_helper'

RSpec.describe 'api/v1/users', type: :request do
  path '/api/v1/users' do
    get('list users') do
      tags 'Users'
      produces 'application/json'
      let!(:users) do
        3.times do
          create(:user)
        end
      end
      response(200, 'successful') do
        it 'Return 3 users' do
          body = JSON(response.body)
          expect(body.count).to eq(1)
        end
        run_test!
      end
    end
  end
  path '/api/v1/users' do
    
    post('create user') do
      tags 'Users'
      parameter name: 'payload', in: :body, 
      schema: { '$ref' => '#/components/schemas/user'  }
      consumes 'application/json'
      response(201, 'successful') do
        let(:payload) { { user: {
          email: 'email@test.com',
          password: '123456'
        } } }
        run_test!
      end
    end
  end

  path '/api/v1/users/{id}' do
    parameter name: 'id', in: :path, description: 'id'
    get('show user') do
    tags 'Users'
      response(200, 'successful') do
        let(:user) { create(:user) }
        let(:id) { user.id }
        run_test!
      end
    end

    patch('update user') do
      parameter name: 'payload', in: :body, 
      schema: { '$ref' => '#/components/schemas/user'  }
      consumes 'application/json'
      produces 'application/json'
      tags 'Users'
      parameter name: 'id', in: :path, description: 'User ID'
      let(:user_1) do
        create(:user)
      end
      response(200, 'successful') do
        let(:id) { user_1.id }
        let(:payload) do
          {
            user: user_1
          }
        end
        run_test!
      end
    end

    put(summary: 'Update User') do
      parameter name: 'id', in: :path, description: 'User ID'
      parameter name: 'payload', in: :body, 
      schema: { '$ref' => '#/components/schemas/user'  }
      consumes 'application/json'
      produces 'application/json'
      tags 'Users'
      response(200, description: 'User updated') do
        let(:id) { '1' }

        let(:payload) do
          {
            user: {
              name: 'Chema',
              email: 'hello@arkusnexus.com'
            }
          }
        end
      end
    end
    delete('delete user') do
      tags 'Users'
      response(204, 'successful') do
        let(:user) { create(:user) }
        let(:id) { user.id }
        run_test!
      end
    end
  end
end
