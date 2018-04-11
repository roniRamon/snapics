class Api::CommentsController < ApplicationController

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render '/api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 409
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      render '/api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 409
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render '/api/comments/show'
  end


  def comment_params
    params.require(:comment).permit(:body, :author_id, :photo_id)
  end
end
