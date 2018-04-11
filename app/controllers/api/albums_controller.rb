class Api::AlbumsController < ApplicationController

  def show
    @album = Album.find(params[:id])
  end

  def create
    @album = Album.new(album_params)
    @album.owner_id = current_user.id

    if @album.save
      render '/api/albums/show'
    else
      render @album.errors.full_messages, status: 409
    end
  end


  def edit
    @album = current_user.albums.find(params[:id])
  end

  def update
    @album = current_user.albums.find(params[:id])

    if @album.update_attributes(album_params)
      render '/api/albums/show'
    else
      render json: @album.errors.full_messages
    end
  end

  def destroy
    @album = current_user.albums.find(params[:id])
    @album.destroy!
    render json: ["Album deleted"], status: 200
  end

  def addphoto
    @album_photos = AlbumPhoto.new(album_id: params[:id],
                                    photo_id: params[:album][:photo_id])

    if @album_photos.save
      @album = @album_photos.album
      render 'api/albums/show'
    else
      render json: @album_photos.errors.full_messages, status: 409
    end
  end

  def album_params
    params.require(:album).permit(:title, :photo_id)
  end

end
