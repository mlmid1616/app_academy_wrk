class AlbumsController < ApplicationController
  #album

    def create
      # debugger 
      @album = Album.new(album_params) #should this be an instance variable?
      if @album.save
        redirect_to bands_url
      else
        flash.now[:errors] = @album.errors.full_messages
      end
    end
  #new_album -- get req
    def new
      render :new
    end
  #edit album -- get req
    def edit
      @album= Album.find(params[:id])
      render :edit
    end
  #album/id (these are specific to particular album)
    def show
      @album = Album.find(params[:id]) #find takes one id
      render :show
    end

    def update
      @album = Album.new(band_params)
      if @album.save
        redirect_to band_url(@album)
      else
        flash.now[:errors] = album.errors.full_messages
      end
    end

    def destroy
      album = Album.find(params[:id])
      album.destroy
      redirect_to bands_url
    end

    private

    def album_params
      params.require(:album).permit(:name,:band_id)
    end
end

# Editing
# Destroying
# Up one level (Track to Album, Album to Band, Band to album index).
# Down one level (Band to each Album, Album to each Track).
# Also a link to build one more of each.
