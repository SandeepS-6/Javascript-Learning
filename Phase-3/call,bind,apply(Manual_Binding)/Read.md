what is call,apply,bind ?

these are used to explicity set of the value of by using the this keyword.

call:- runs the fun immediatley by using the this we can set the fun value (object,functin)
it should be pass the object as the param while using the call method

ex:-
let obj= {
name:'heyphen",
age:'non"

}

function callMethod(){
console.log(this);
}

callMethod.call(obj);

output :

obj (object);

apply:- it is also do the same above call method but in a diff way here if we need to pass so many eleement then we need pass with the array format.

Ex:-

let obj= {
name:'heyphen",
age:'non"

}

function callMethod(obj,a,b){
console.log(this);
}

callMethod.apply(obj,[1,2]);

output :

obj 1,2 (object);

bind:- it returns a new function this fixed forever. it automatically giving the function with values only.

same as the call method but bind should be there .

problem (usecase scenario):-

Step-by-step Problem
🟢 Step 1: Form Setup

Create a form with these fields:

Role (text input)
Name (text input)
Bio (textarea)
Photo URL (text input)
Submit button

👉 Requirement:

On submit, prevent page reload
🟢 Step 2: Data Structure

Create a structure to store users:

Use an array
Each user should have:
role
name
bio
photo

👉 Think:

Where will you store this?
How will you update it?
🟢 Step 3: Add User

When form is submitted:

Capture all input values
Create a user object
Push it into your array

👉 Requirement:

Clear form after submission
🟢 Step 4: Render UI (Cards)

Display all users as cards:
Each card should show:

Image
Name
Role
Bio

👉 Requirement:

Cards should update every time new user is added
🟢 Step 5: Re-render Strategy

Before rendering:

Clear existing UI
Recreate all cards from array

👉 Think:

Why not append directly?
Why clear first?
🟢 Step 6: Identify Clicked Card

When user clicks on a card:

Detect which card was clicked

👉 Hint:

You’ll need a way to map UI → data
🟢 Step 7: Delete User

When a card is clicked:

Remove that user from array
Re-render UI

👉 Requirement:

Only clicked card should be removed
