class SessionsController < ApplicationController

  def create
    #just logs in
    user = User.find_by(user_params[:email], user_params[:password])
    if user && user.matching_password?(password)
      session[:session_token] = user.reset_session_token!
    else
      # redirect_to users_url/user.id
      nil
    end
  end

  def new
    render :new #this will give a form to give parameters
  end

  def destroy
    logout
    redirect_to new_sessions_url
  end

  private

  def user_params
    params.require(:user).permit(:email,:password)
  end


end


# Create a SessionsController but no Session model.
# Write controller methods and the accompanying routes so that users can log in and log out. Should session be a singular resource?
# SessionsController#create should re-set the appropriate user's session_token and session[:session_token].
# For now just redirect them to a User#show page which simply displays that user's email.
