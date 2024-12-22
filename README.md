# MongoDB Aggregation Unexpected Empty Result

This repository demonstrates a subtle bug in a MongoDB aggregation pipeline. The pipeline uses `$lookup`, `$unwind`, and `$match` stages.  Under specific conditions, the pipeline returns an empty array despite the expected field existing in the documents. This is because the condition in `$match` evaluates to false when the field's value is null, 0, or an empty string. 

## Bug Description
The provided Javascript code shows an aggregation pipeline that's designed to join two collections, unwind the results, and then filter based on the existence of a field within the joined documents. However, in the scenario where `results.someField` exists but holds a falsy value (such as null, 0, or ""), the `$match` stage unintentionally filters these documents out, leading to an incorrect empty result set. 

## Solution
The solution involves refining the `$match` condition to explicitly check for the existence of the field using the `$exists` operator in a way that does not exclude documents where the field has falsy values.  This ensures that all documents where the field is present are included in the result, regardless of its value.