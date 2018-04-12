Rails.application.routes.draw do


  namespace :api do
    get 'tags/create'
  end

  namespace :api do
    get 'tags/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :photos
    resources :albums
    resources :comments

    post 'albums/:id/photo', to: 'albums#addphoto'
  end

 root "static_pages#root"
  
end
