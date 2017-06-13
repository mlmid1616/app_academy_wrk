Rails.application.routes.draw do
  namespace :api do
    resources :todos, only:[:index, :show, :create, :update, :destroy]
  end

  get '/staticpages' => 'static_pages#root'

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
