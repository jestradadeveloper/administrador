require 'rails_helper'
RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'User show info' do
    let(:user) { create(:user) }
    context 'User indexing correctly with token' do
      before do
        get(:show, format: :json, params: { id: user.id })
      end
      context 'Status :ok response code' do
        subject { response }
        it { is_expected.to have_http_status(:ok) }
      end
    end
  end
end
