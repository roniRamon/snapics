class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :is_signin?
  private

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def is_signin?
    !!current_user
  end

  def logout
    @current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  def require_signin
    redirect_to new_session_url unless is_signin?
  end
end
