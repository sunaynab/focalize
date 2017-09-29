class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      @photos = Photo.where(user_id: params[:user_id])
    else
      users_following = current_user.following_users
      photos = users_following.map do |u|
        u.photos
      end
      @photos = photos.flatten
    end
  end

  def show
    @photo = Photo.find(params[:id])
    unless @photo
      render json: ['This photo does not exist'], status: 404
    end
  end

  def create
    @photo = Photo.new(user_id: current_user.id, image: photo_params[:image])
    unless @photo.save
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if @photo
      @photo.destroy!
      render json: @photo
    else
      render json: ['This photo does not exist'], status: 404
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:image, :user)
  end
end
