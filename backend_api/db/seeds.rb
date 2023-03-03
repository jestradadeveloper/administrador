include FactoryBot::Syntax::Methods

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#superadmin seed
superadminuser = User.create(email:ENV['SUPERADMIN_EMAIL'], password: ENV['SUPERADMIN_PASSWORD'])
if superadminuser.valid?
  superadminuser.save
end
adminUser = User.create(email: 'admin2@admin.com', password: ENV['SUPERADMIN_PASSWORD'])
if adminUser.valid?
  adminUser.save
end
Team.create(name: Faker::Internet.username, description: Faker::Internet.username,  user_id: superadminuser.id)
Account.create(name: 'Nuevas cuentas', client: Faker::Internet.username, user_id: superadminuser.id)