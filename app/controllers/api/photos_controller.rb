class Api::PhotosController < ApplicationController
  def index
    if params[:user_id]
      @photos = Photo.where(user_id: params[:user_id])
    else
      @photos = Photo.all
    end
  end

  def show
    @photo = Photo.find(params[:id])
    unless @photo
      render json: ['This photo does not exist'], status: 404
    end
  end

  def create
    @photo = Photo.new(user_id: current_user.id)
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
