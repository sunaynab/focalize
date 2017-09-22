class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/users/show"
    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
  end

  def photo_params
    params.require(:photo).permit(:image_url, :user)
  end
end
