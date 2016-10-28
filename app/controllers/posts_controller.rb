class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
    @posts = Post.all
  end

  def show
    render partial: 'post'
  end

  def new
    @post = Post.new
    render partial: 'form'
  end

  def edit
    render partial: 'form'
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      @posts = Post.all
      render partial: 'posts'
    end
  end

  def update
    if @post.update(post_params)
      @posts = Post.all
      render partial: 'posts'
    end
  end

  def destroy
    @post.destroy
    @posts = Post.all
    render partial: 'posts'
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body)
    end
end
