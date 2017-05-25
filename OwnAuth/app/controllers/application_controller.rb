class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user

  def current_user  #So every time we use anyof the following methods it will find their session_token first
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout  #we don't need it b/c it we are obvi logging out the current user
    current_user.reset_session_token! #this will save it, but this time, we need give them the cookie
    session[:session_token] = nil  #we set their old cookie to nil
  end

  def redirect_if_not_logged_in
    redirect_to new_sessions_url unless logged_in?
  end

end

# Make sure to include the appropriate methods in your views as helper methods (e.g. helper_method :current_user). You'll probably want:
#
# #current_user to return the current user.
# #logged_in? to return a boolean indicating whether someone is signed in.
# #log_in_user!(user) reset the users session token and cookie
