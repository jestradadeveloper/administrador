Rails.application.routes.draw do

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      get '/up', to: 'health_checks#index'
      resources :users
      resources :accounts
      resources :teams do 
        resources :members
      end
    end
  end
end
