class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
