require 'swagger_helper'

RSpec.describe 'api/v1/teams', type: :request do
  let(:team) { create(:team) }
  path '/api/v1/teams' do

    get('list teams') do
      tags 'Teams'
      produces 'application/json'
      response(200, 'successful') do
        run_test!
      end
    end

    post('create team') do
      tags 'Teams'
      parameter name: 'payload', in: :body, 
      schema: { '$ref' => '#/components/schemas/team'  }
      produces 'application/json'
      consumes 'application/json'
      response(201, 'successful') do
        let(:user) { create(:user) }
        let(:team) { create(:team) }
        let(:payload) { { team: {
           name: team.name,
           start_date: team.end_date,
           end_date: team.end_date,
           description: team.description,
           user_id: user.id,
         } } }
        run_test!
      end
    end
  end

  path '/api/v1/teams/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'
    
    get('show team') do
      tags 'Teams'
      produces 'application/json'
      response(200, 'successful') do
        let(:team) { create(:team) }
        let(:id) { team.id }

        run_test!
      end
    end

    patch('update team') do
      tags 'Teams'
      parameter name: 'id', in: :path, description: 'Team ID'
      parameter name: 'payload', in: :body, 
      schema: { '$ref' => '#/components/schemas/team'  }
      consumes 'application/json'
      produces 'application/json'

      response(200, 'successful') do
        let(:id) { team.id }
        let(:payload) do
          {
            team: team
          }
        end
        run_test!
      end
    end

    put('update team') do
      tags 'Teams'
      parameter name: 'id', in: :path, description: 'Team ID'
      parameter name: 'payload', in: :body, 
      schema: { '$ref' => '#/components/schemas/team'  }
      consumes 'application/json'
      produces 'application/json'
      response(200, 'successful') do
        let(:id) { team.id }
        let(:payload) do
          {
            team: team
          }
        end
        run_test!
      end
    end

    delete('delete team') do
      tags 'Teams'
      parameter name: 'id', in: :path, description: 'Team ID'
      response(204, 'successful') do
        let(:id) { team.id }

        run_test!
      end
    end
  end
end
