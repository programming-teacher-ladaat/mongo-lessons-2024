db.users.find({})
db.users.find({ address: { city: 'bb', num: 25, street:'r akiva' } }) // חובה לשמור על סדר זהה של מפתחות באוביקט
db.users.find({ address: { city: 'bb', street:'r akiva', num: 25 } })
//db.users.find({ address: { city: 'bb', street:/.*/, num: 25} }) // ?????????

db.users.find({ "address.city": 'bb' }, { name:1, "address.city": 1 }) // כל מי שגר בב"ב
db.users.find({ "address.city": 'bb', "address.num": 25, "address.street":'r akiva' })

//const obj = {"first name": 'dani', "address.city": 'bb'}
//obj["address.city"]

db.students.insert({name: "noa"})

db.students.find({ marks : [
        {
            subject : "SQL",
            mark : 90
        },
        {
            "subject" : "C#",
            "mark" : 50
        }
    ]})

// $size - אם קיים מערך בגודל כזה
db.students.find({ marks : { $size: 2 } })
db.students.find({ marks : { $size: 0 } })

// .0 - מקום ראשון
db.students.find({ 'marks.0': { subject: "C#", mark: 100 } }) // השוואת אוביקט שלם
db.students.find({ 'marks.0.subject': "C#" }) // השוואת תכונה של האיבר הראשון
db.students.find({ 'marks.0.mark': { $gte: 85 }})
db.students.find({ 'marks.0.subject': /^c/i })

// האם כל ערכי המערך הנשלח מופעיים במערך של המסמך
db.students.find({ marks: { $all :[
        {
            "subject" : "C#",
            "mark" : 50
        },
        {
            subject : "SQL",
            mark : 90
        },
    ]
}})

// איבר כלשהו זהה בדיוק
db.students.find({ marks: {
            "subject" : "C#",
            "mark" : 50
   }
})

db.students.find({ "marks.mark": { $lt: 70 }}) // כל מי שיש לו ציון כלשהו קטן משבעים