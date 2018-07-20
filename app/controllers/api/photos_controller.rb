class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.includes(:user).all
  end

  def show
    @photo = Photo.find(params[:id])
    render '/api/photos/show'
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render '/api/photos/show'
    else
      errors = @photo.errors.messages.map do |k, v|
        if k == :img_url
          v[0]
        else
          k.to_s.capitalize + ' ' + v[0]
        end
      end
      render json: errors, status: 409
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])

    if @photo.update_attributes(photo_params)
      render '/api/photos/show'
    else
      render json: @photo.errors.full_messages, status: 409
    end
  end

  def edit
  end

  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.destroy!
  end

  def photo_params
    params.require(:photo).permit(:img_url, :owner_id, :title, :description)
  end
end
