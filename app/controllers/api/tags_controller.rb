class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
    render '/api/tags/index' 
  end

  def create
    @tag = Tag.new(tag_name: params[:tag][:tag_name])
    @tagging = Tagging.new(
      photo_id: params[:tag][:photo_id]
    )

    if @tag.save
      @tagging.tag_id = @tag.id
      if @tagging.save
        @photo = @tagging.photo
        render '/api/photos/show'
      else
        render json: ['Error with tagging'], status: 409
      end
    else
      render json: @tag.errors.full_messages, status: 409
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    @tag.destroy
    render '/api/tags/show'
  end

  def tag_params
    params.require(:tag).permit(:tag_name, :photo_id)
  end


end
