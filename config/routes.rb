Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show] do
      resources :photos, only: [:index]
      resources :follows, only: [:create, :destroy]
    end

    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:create, :show, :destroy, :index]
  end

  root to: "static_pages#root"
end
