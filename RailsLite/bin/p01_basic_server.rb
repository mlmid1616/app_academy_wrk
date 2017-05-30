require 'rack'
require 'byebug'


app = Proc.new do |env|
  debugger
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  object = req.fullpath
  res.write(object)
  res.finish
end


Rack::Server.start(
app: app,
Port: 3000
)
