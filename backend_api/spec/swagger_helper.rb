# frozen_string_literal: true
require 'rails_helper'

RSpec.configure do |config|
  # Specify a root folder where Swagger JSON files are generated
  # NOTE: If you're using the rswag-api to serve API descriptions, you'll need
  # to ensure that it's configured to serve Swagger from the same folder
  config.swagger_root = Rails.root.join('swagger').to_s

  # Define one or more Swagger documents and provide global metadata for each one
  # When you run the 'rswag:specs:swaggerize' rake task, the complete Swagger will
  # be generated at the provided relative path under swagger_root
  # By default, the operations defined in spec files are added to the first
  # document below. You can override this behavior by adding a swagger_doc tag to the
  # the root example_group in your specs, e.g. describe '...', swagger_doc: 'v2/swagger.json'
  config.swagger_docs = {
    'v1/swagger.yaml' => {
      openapi: '3.0.1',
      info: {
        title: 'API V1',
        version: 'v1'
      },
      paths: {},
      components: {
        schemas: {
          errors_object: {
            type: 'object',
            properties: {
              errors: { '$ref' => '#/components/schemas/errors_map' }
            }
          },
          errors_map: {
            type: 'object',
            additionalProperties: {
              type: 'array',
              items: { type: 'string' }
            }
          },
          user: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              email: { type: 'string' },
              password: { type: 'string' },
              english_level: { type: 'string' },
              technical_knowledge: { type: 'string' },
              resume_link: { type: 'string'}
            },
            required: %w[email password],
            example: {
              user: {
                email: "test@test.com",
                password: "123456"
              }
            }
          },
          account: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              client: { type: 'string' },
              account_id: { type: 'string' },
              team_id: { type: 'string' }
            },
            required: %w[name client account_id team_id],
            example: {
              account: {
                name: "Jose Estrada",
                client: "Mind",
                client_id: "1",
                team_id: "2",
              }
            }
          },
          team: {
            type: 'object',
            properties: {
              name: { type: 'string'},
              description: { type: 'string' },
              start_date: { type: 'string' },
              end_date: { type: 'string' },
              user_id: { type: 'string' }
            },
            required: %w[name, user_id],
            example: {
              team: {
                name: "Jose Estrada",
                description: "Description",
                start_date: "Start Date",
                end_date: "End date",
                user_id: "user_id"
              }
            }
          }
        }
      },
      servers: [
        {
          url: 'http://{defaultHost}',
          variables: {
            defaultHost: {
              default: 'localhost:3000'
            }
          }
        }
      ]
    }
  }

  # Specify the format of the output Swagger file when running 'rswag:specs:swaggerize'.
  # The swagger_docs configuration option has the filename including format in
  # the key, this may want to be changed to avoid putting yaml in json files.
  # Defaults to json. Accepts ':json' and ':yaml'.
  config.swagger_format = :json
end
