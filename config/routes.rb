Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :photos
    resources :albums
    resources :comments
    get 'photos/:id/comment', to: 'comments#getcomments'
    post 'albums/:id/photo', to: 'albums#addphoto'
  end

 root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
