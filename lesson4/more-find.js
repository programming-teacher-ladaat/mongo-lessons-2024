db.aaa.insert({name:'aaa'})
db.aaa.insert({name:'aaa', city: 'bb'})
db.aaa.insert({})
db.aaa.insert({city:'aaa'})
db.aaa.insert({name:'bbb'})
db.aaa.insert({name:null})
db.aaa.insert({name:123})
db.aaa.insert({name:123})
db.aaa.insert({name:5.5})
db.aaa.insert({_id:1111, name:true})

db.aaa.find({ name: null }) // קיים שדה ריק או לא קיים
db.aaa.find({ name: { $exists: false } }) // לא קיים שדה כזה
db.aaa.find({ name: { $exists: true } }) // אם יש שדה בשם הזה גם אם הוא נאל


db.aaa.find()
db.aaa.find({ name: {$type:"string"} })
db.aaa.find({ name: {$type:2} })

// github link:
// https://github.com/programming-teacher-ladaat/mongo-lessons-2024.git