Rails.application.routes.draw do

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      post '/auth/login', to: 'authentication#login'
      post '/auth/validate-token', to: 'authentication#verify_token'
      get '/up', to: 'health_checks#index'
      resources :users
      resources :accounts
      resources :teams
      resources :members
      post '/participant', to: 'members#destroy'
    end
  end
end
