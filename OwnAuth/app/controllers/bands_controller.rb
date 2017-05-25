class BandsController < ApplicationController
  before_action :redirect_if_not_logged_in # is this meant to be a boolean? 
#bands
  def index #done
    render :index
  end


  def create
    @band = Band.new(band_params) #should this be an instance variable?
    if @band.save
      redirect_to band_url(@band)
    else
      flash.now[:errors] = band.errors.full_messages
    end
  end
#new_band -- get req
  def new
    render :new
  end
#edit band -- get req
  def edit
    @band = Band.find(params[:id])
    render :edit
  end
#band/id (these are specific to particular band)
  def show
    @band = Band.find(params[:id]) #find takes one id
    render :show   #I want to edit, destroy, and give links to everything
  end

  def update
    @band = Band.new(band_params)
    if @band.save
      redirect_to band_url(@band)
    else
      flash.now[:errors] = band.errors.full_messages
    end
  end

  def destroy
    band = Band.find(params[:id])
    band.destroy
    redirect_to bands_url
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end

end

# Editing
# Destroying
# Up one level (Track to Album, Album to Band, Band to bands index).
# Down one level (Band to each Album, Album to each Track).
# Also a link to build one more of each.
