What is the OOPS ?

Object-Oriented Programming (OOP) in JavaScript is a way of writing code where we organize data and related functions into objects, making the code more structured, reusable, and maintainable.

types of oops:-
encapsulation,
abstraction,
polymorphisam,
inheritance

Note:
inside function we need use the = for an object

Use Case: Pencil Object Creator (Constructor + Prototype)
🎯 Goal

Build a system where you:

Create multiple pencil objects
Store their properties
Use shared methods via prototype
Perform actions using those objects
🪜 Step-by-step Problem (NO solution)
🟢 Step 1: Define Constructor Function

Create a function that represents a pencil.

Each pencil should have:

Brand
Price
Color

👉 Requirement:

Use this to assign values
Do NOT use object literal ({})
🟢 Step 2: Create Multiple Objects

Create at least 2 pencil objects using your constructor.

👉 Requirement:

Use new keyword
Each object should store its own data

👉 Think:

What happens internally when new is used?
🟢 Step 3: Add Shared Method

Create a method that:

Displays text on screen
Applies a color to that text

👉 Requirement:

Method should NOT be inside constructor
It should be shared by all objects

👉 Think:

Where should shared methods be placed?
🟢 Step 4: Use Prototype

Attach the method to the constructor’s prototype.

👉 Requirement:

All objects should access this method
Method should not be duplicated in memory

👉 Think:

How does JS find methods on prototype?
🟢 Step 5: Call Method Using Objects

Use each pencil object to:

Call the method
Pass different values (text, color)

👉 Requirement:

Each object should behave independently
But use same method
🟢 Step 6: Understand this

Inside:

Constructor
Prototype method

👉 Identify:

What does this refer to in each case?

👉 Think:

Why does this work differently in normal function vs method?
🟢 Step 7: Inspect Object Structure

Log your created objects.

👉 Observe:

Own properties
Prototype methods

👉 Think:

Where is the method stored?
Is it inside object or prototype?
🟢 Step 8: Experiment (Important)

Try changing:

Add method inside constructor
Add method in prototype

👉 Compare:

Memory usage
Behavior
