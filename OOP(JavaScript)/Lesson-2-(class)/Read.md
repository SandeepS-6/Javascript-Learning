What is class ?
class a blue print of object creation.

what is constructor ?
constructor is a special method where whenever the object is created with new then constructor method will exicute immediatley

                   [or]

when an object is created with new keyword then constructor is only exicute one time

inside the class everything is a method only.

code syntax :-

class {
constructor(){

}
}

task:1
create a class object template and 1s
Build a small milk products system where you:

Create multiple milk product objects
Display products on UI
Perform actions using class methods
Remove specific products dynamically
🪜 Step-by-step Problem (NO solution)
🟢 Step 1: Create a Class

Create a class for milk products.

Each product should store:

Product type
Product price
Product name
Product color

👉 Requirement:

Use a constructor
Initialize values using this
🟢 Step 2: Create Multiple Objects

Create at least 2 product objects.

Example ideas:

Kalakand
Kova
Milkshake
Paneer

👉 Requirement:

Use new keyword
Each object should have different values

👉 Think:

What happens internally when new is used?
🟢 Step 3: Create a Method to Display Product

Create a class method that:

Creates a paragraph element
Adds product text dynamically
Applies the product color
Appends it to the DOM

👉 Requirement:

Method should use object properties using this
🟢 Step 4: Render Multiple Products

Call the display method using different objects.

👉 Requirement:

Each product should create separate UI content
Different colors should appear correctly
🟢 Step 5: Create Remove Method

Create another class method that:

Finds all rendered product elements
Removes only matching product items

👉 Requirement:

Removal should happen based on object-specific property
Only related products should be removed

👉 Think:

How will you identify which elements belong to which object?
🟢 Step 6: Understand this

Inside:

Constructor
Display method
Remove method

👉 Observe:

What does this refer to in each method?

👉 Think:

Why does this change based on object call?
🟢 Step 7: Prototype Understanding

Inspect your created objects in console.

👉 Observe:

Which properties are directly inside object?
Where are methods stored?

👉 Think:

Are methods duplicated for every object?
🟢 Step 8: Add Interaction

Create buttons for:

Add product
Remove product

👉 Requirement:

Clicking button should trigger object methods
