# Movie-Data

A page that dynamically generates content for a page based on the keys and values of a javascript object. [Deployed here](https://taha-hassan-git.github.io/Movie-Data/)

## Summary

The objectMapping function is the main engine of this program. It loops over an object and fills elements with their values, and then appends those elements to the
document. Other functions such as handleSubmit, handleCancel, handleAdd etc all call on this function at some point.

## Next steps

I learned a lot while making this and I can see a lot of inefficiencies now. Things that could be looped, or functions that do similar things that could be abstracted
or combined.
