Rails.application.routes.draw do
  get '/up', to: 'health_checks#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
