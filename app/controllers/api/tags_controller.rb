class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      render '/api/tags/show'
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
    params.requier(:tag).permit(:tag_name)
  end
end
