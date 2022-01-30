Rails.application.routes.draw do
  scope '/api', defaults: { format: :json } do
    resources :categories, only: [:index]
    resources :restaurants, only: %i[index show]
    resources :orders, only: %i[create show]
    resources :available_cities, only: [:index]
  end
end
