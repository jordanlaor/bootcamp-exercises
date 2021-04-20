# Restaurants Queries

1.1 db.restaurants.find()
1.2 db.restaurants.find({cuisine: "asian"})
1.3 db.restaurants.find({kosher: true})
1.4 db.restaurants.find({"address.city":"Tel Aviv"})
1.5 db.restaurants.find({address: { "city" : "Tel Aviv", "street" : "Balfur 15", "coordinates" : [ -10.46574, 30.6774 ] }})
1.6 db.restaurants.find({"address.coordinates":[-77.46574,40.6774]})
1.7 db.restaurants.find().sort({name: 1})
1.8 db.restaurants.find().sort({"address.city": 1})
1.9 db.restaurants.updateOne({_id: ObjectId("607d414a4cd37b1b390640c5")}, {$set: {name: "gooci" }})
1.10 db.restaurants.updateOne({_id: ObjectId("607d414a4cd37b1b390640c5")}, {$push:{reviews: {date: ISODate(), score: 7}}})
1.11 db.restaurants.updateMany({},{$set:{kosher: true}})
1.12 db.restaurants.deleteOne({_id:ObjectId("607d414a4cd37b1b390640c4")})
1.13 db.restaurants.deleteMany({})
1.14 db.restaurants.updateOne({_id: ObjectId("607d414a4cd37b1b390640c8"), "reviews.date": ISODate("2020-01-01T00:00:00Z")}, {$inc: {"reviews.$.score": 1}})
1.15 db.restaurants.updateOne({_id: ObjectId("607d414a4cd37b1b390640c8"), "reviews.date": ISODate("2020-01-01T00:00:00Z")}, {$inc: {"reviews.$.score": -1}})

2.1 db.restaurants.find().forEach(rest => print(rest.name))
2.2 db.restaurants.find().forEach(rest => print(rest.address.city))
2.3 db.restaurants.find().forEach(rest => print(rest.address.coordinates))

3.1 db.restaurants.find({name: /^b/i})
3.2 db.restaurants.find().count()
3.3 db.restaurants.find({"reviews.date": {$gte: new Date("2020-01-01"), $lt: new Date("2020-01-02")}})

4.1 db.restaurants.aggregate([{$project: {scoreAvg: {$avg: "$reviews.score"}}}])
4.2 db.restaurants.aggregate([{$match: {_id: ObjectId("607d414a4cd37b1b390640c8")}},{$project: {scoreAvg: {$avg: "$reviews.score"}}}])
