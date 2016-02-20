Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api do
    resources :benches, only: [:index, :show], defaults: { format: :json}
  end

end
