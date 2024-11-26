// CRUD
// Create - insert
// Read   - find

// Update
db.books.updateMany(
    { pageCount: 50 },
    {
        $set: { pageCount: 5, isNiceBook: false }, // עדכון שדה קיים או הוספת שדה חדש
        $unset: { longDescription: true } // מחיקת שדה
    })

db.books.updateMany(
    { name: /C#/i },
    {
        $currentDate: { updatedDate: true },
        //    $rename: { title: 'name' } // שינוי שם שדה
        $inc: { pageCount: -5 }, // הוספת ערך לשדה מסוג מספר
        //    $mul: { pageCount: 0.5 }, // הכפלת ערך של שדה מסוים מסוג מספר   
    })

// update - ברירת מחדל מעדכן אחד
db.books.update({ pageCount: { $lt: 400, $gt: 300 } },
    { $set: { shortDescription: 'bbbbbb' } },
    //    { $max: { pageCount: 390 } }, // מעדכן את השדה רק אם הערך של השדה קטן יותר מ-390
    //    options - אפשרויות נוספות
    {
        multi: true /*עדכון מרובה - הרבה מסמכים כל מה שמתאים לתנאי*/,
    }
)

db.books.update(
    { pageCount: 0 },
    { $set: { name: 'abc' } },
    {
        multi: true,
        upsert: true /* אם קיים מישהו שמתאים לתנאי - מעדכן אותו
         אם לא קיים - מכניס איבר חדש שמתאים לתנאי עם הערכים המעודכנים */
    }
)


// Delete - remove
db.books.remove({ pageCount: 0 }) // מחיקת כל הספרים שמספר העמודים שלהם 0
db.books.remove({ title: /Java/i }, { justOne: true }) // מוחק את הראשון

// מחיקת כל הספרים שהקוד שלהם מסוג אובגקט איי די
db.books.remove({ _id: { $type: "objectId" } })

// db.books.drop() // מוחק את האוסף
db.users.remove({}) // מחיקת כל הנתונים מהאוסף - חובה לכתוב תנאי