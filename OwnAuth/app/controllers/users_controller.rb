# Write methods on the UsersController to allow new users to sign up.
# Users should be logged in immediately after they sign up.

class UsersController < ApplicationController

  def new
    render :new
  end   #need to make view page and add login to ApplicationController

  def create
    # user = User.create(user_params) # why doesn't this work?
    # login(user)
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redirect_to user_url(@user) #this should a slash
    else
      flash.now[:errors] = @users.errors.full_messages
      render :new
    end

  end

  def show
    @user = current_user
    redirect_to bands_url
  end

  private

  def user_params
    params.require(:user).permit(:email,:password)
  end
end
