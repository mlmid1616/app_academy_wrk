# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  validates :password, length: {minimum: 6, allow_nil: true} #for edting while logged in
  validates :email, :password_digest, :session_token, presence: true

  after_initialize :ensure_session_token #Right?

  attr_reader :password  #we need this b/c it gives us a password method which will give us the
  # instance of password (which we set when we attributed the password)

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.matching_password?(password)
      user
    else
      nil
    end
  end


  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password #this is so we can check the length! attr reader will call it (our now password method)
    self.password_digest = BCrypt::Password.create(password)
  end

  def matching_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
    #The password goes through x amount of possible results and sees if it includes it
  end

  private

    def ensure_session_token
      self.session_token ||= User.generate_session_token
    end
end


# Write a User::find_by_credentials(email, password) method.
