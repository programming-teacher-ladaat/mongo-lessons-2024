db.getCollection("restaurants").find({
	"name": /b/i // מכיל בי קטנה/גדולה
});
// ביטויים רגולריים נוספים ניתן למצוא בקישור
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

// + - 1 or more
db.getCollection("restaurants")
	.find({
		"name": /^a.+a$/i
	});

// aba- V
// aaa- V
// ab - X
// aa - X
// abdhdhdhda - V
// abjvxcbjA - V

// * - 0 or more
db.getCollection("restaurants")
	.find({
		"name": /^a.*a$/i
	});

// aba- V
// aaa- V
// ab - X
// aa - V
// abdhdhdhda - V
// abjvxcbjA - V


// ? - 0 or 1
db.restaurants
	.find({
		"name": /^a.?a$/i
	});

// aba- V
// aaa- V
// ab - X
// aa - V
// abdhdhdhda - X
// abjvxcbjA - X

// SELECT ... TOP 10
// FROM
// WHERE
// ORDER BY ... ASC/DESC

db.restaurants // FROM
	.find({}, // WHERE
		{ // SELECT
			"name": 1,
			"_id": 0
		});

// limit - כמה לשלוף
// skip - כמה תדלג
db.restaurants.find().limit(10) // SELECT * TOP 10
db.restaurants.find().limit(10).skip(3) // כל המסעדות החל מהאיבר הרביעי
db.restaurants.find().skip(9).limit(1) // האיבר העשירי
// לא משנה הסדר

// ============ מיון ============
db.restaurants.find().sort({ cuisine: -1, name: 1 }) // ORDER BY cuisine DESC, name ASC

// ============ מנייה ============
db.restaurants.find().count() // כמות המסעדות באוסף
db.restaurants.countDocuments() // כמות המסעדות באוסף

db.restaurants.find({ name: /^a/i }).count() // כמות המסעדות שמתחילות באות איי
db.restaurants.countDocuments({ name: /^a/i }) // כמות המסעדות שמתחילות באות איי

// הערה חשובה
// אנו נשתמש רק בדרך השניה כיוון שהיא יעילה יותר - countDocuments

// תעודת אבטחה
// https://netfree.link/wiki/%D7%94%D7%AA%D7%A7%D7%A0%D7%AA_%D7%AA%D7%A2%D7%95%D7%93%D7%94_%D7%A0%D7%A4%D7%95%D7%A6%D7%94