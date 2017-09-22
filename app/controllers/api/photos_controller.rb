class Api::PhotosController < ApplicationController
  def index
  end

  def show
    @photo = Photo.find_by(params[:id])
  end

  def create
    @photo = Photo.create(photo_params)
    if @photo.save

    else
      render json: @photo.errors.full_messages
    end
  end

  def destroy

  end

  def photo_params
    params.require(:photo).permit(:image_url, :user)
  end
end
