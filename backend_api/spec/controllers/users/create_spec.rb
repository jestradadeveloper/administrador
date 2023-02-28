require 'rails_helper'
RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'Create a user' do
    let(:user) do
      {
        email: Faker::Internet.email,
        password: Faker::Internet.password(min_length: 6)
      }
    end
    context 'User created correctly' do
      before do
        post(:create, format: :json, params: { user: user })
      end
      context 'Created Response Status' do
        subject { response }
        it { is_expected.to have_http_status(:created) }
      end
      context 'Correct  user values response' do
        subject { payload_test }
        it { is_expected.to include(:data) }
      end
    end
    let(:bad_user) { { email: 'test', password: '12345' } }
    context 'Bad User' do
      before do
        post(:create, format: :json, params: { user: bad_user })
      end
      context 'Bad request status code response' do
        subject { response }
        it { is_expected.to have_http_status(:bad_request) }
      end
      context 'Validation errors response' do
        subject { payload_test }
        it { is_expected.to include(:errors) }
      end
    end
  end
end
