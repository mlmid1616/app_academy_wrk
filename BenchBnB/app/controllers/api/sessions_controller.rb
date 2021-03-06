class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username],user_params[:password])
    #
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ['invalid credentials'], status: 401
    end

  end

  def destroy
    if logged_in
      logout
    else
      render json: ['error, not found!'], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
