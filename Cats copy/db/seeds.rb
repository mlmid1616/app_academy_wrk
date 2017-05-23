colors = %w(yellow red orange black gray purple)

20.times {Cat.create(birth_date: Time.now - rand(10000), color: colors.sample, name: Faker::Name.first_name, sex: ["M", "F"].sample, description: Faker::Lorem.sentence)}

20.times { |i| CatRentalRequest.create(cat_id: rand(20), start_date: ((i + 1) * 20).days.ago, end_date: ((i + 1) * 10).days.ago)}
