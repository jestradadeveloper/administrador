require 'rails_helper'
RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'User update info' do
    let!(:user) { create(:user) }
    context 'User indexing correctly with token' do
      before do
        params = { name: 'Otro' }
        put :update, params: { id: user.id, user: params }, format: :json
        user.reload
      end
      context 'Status :ok response code' do
        subject { response }
        it { is_expected.to have_http_status(:ok) }
      end
    end
  end
end
