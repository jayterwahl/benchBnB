# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


bench1 = Bench.create!(
{lat: 37.78331, lng: 122.416725, description: "this is a bench all right"}
)
bench2 = Bench.create!(
{lat: 37.78334, lng: 122.416712, description: "this is a bench2 all right"}
)
bench3 = Bench.create!(
{lat: 37.78338, lng: 122.416787, description: "this is a bench3 all right"}
)
