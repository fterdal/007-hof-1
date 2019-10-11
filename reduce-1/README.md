# From Entries to Object

If you think about it, an object in JavaScript is just a list of entries, and you could represent the object as an array of arrays. Each array stores the "key" at index 0, and the "value" at index 1. So, for the object:

```
{
  firstName: 'Ada',
  lastName: 'Lovelace',
}
```

could instead be written:

```
[
  ['firstName', 'Ada'],
  ['lastName', 'Lovelace'],
]
```

As it turns out, there are some built-in functions that transform objects into arrays of entries, and arrays of entries into objects. For this exercise, you'll be writing your own such function. Write a function that, when passed an array of entries, returns an object. Here are some things to keep in mind:

1. Assume that every element in the array of entries is itself an array.
2. The first element of each entry is a string, representing a key on the object.
3. The second element of each entry can be anything -- in fact, the element may have only one thing in it!
4. If the same key shows up twice in the array of entries, the later one wins out.
