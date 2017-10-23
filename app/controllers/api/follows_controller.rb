class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(user_following_id: follow_params[:user_following_id] , follower_id: current_user.id)
    if @follow.save
      @user = User.find(follow_params[:user_following_id])
      render "api/users/show"
    else
      render json: @follow.errors.full_messages
    end
  end

  def unfollow
    @follow = Follow.find_by(follower_id: current_user.id, user_following_id: follow_params[:user_following_id])
    if @follow
      @user = User.find(follow_params[:user_following_id])
      @follow.destroy!
      render "api/users/show"
    else
      render json: ['You were not following this user.']
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :user_following_id)
  end
end
