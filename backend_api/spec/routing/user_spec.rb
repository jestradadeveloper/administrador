require 'rails_helper'

describe 'User CRUD routes resources' do
  it 'Create POST /api/v1/users route' do
    expect(post: '/api/v1/users').to route_to(
      format: 'json',
      controller: 'api/v1/users',
      action: 'create'
    )
  end
  it 'Index GET /api/v1/users route' do
    expect(get: '/api/v1/users').to route_to(
      format: 'json',
      controller: 'api/v1/users',
      action: 'index'
    )
  end
  it 'Show GET /api/v1/users/{user_id} route' do
    expect(get: '/api/v1/users/1').to route_to(
      format: 'json',
      controller: 'api/v1/users',
      action: 'show',
      id: '1'
    )
  end
  it 'User update PUT /api/v1/users/{user_id} route' do
    expect(put: '/api/v1/users/1').to route_to(
      format: 'json',
      controller: 'api/v1/users',
      action: 'update',
      id: '1'
    )
  end
end
