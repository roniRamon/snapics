require 'test_helper'

class Api::TagsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_tags_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_tags_destroy_url
    assert_response :success
  end

end
