class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all.take(20)
  end

  def update
    @user = User.find(params[:id])
    if @user.update(image: user_params[:image])
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @current_user = current_user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :image)
  end
end
