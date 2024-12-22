```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "results",
    },
  },
  {
    $unwind: "$results",
  },
  {
    $match: {
      "results.someField": { $exists: true },
    },
  },
];
await collectionA.aggregate(pipeline).toArray();
```