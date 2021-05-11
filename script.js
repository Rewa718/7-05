// connect "Enter" button with "decide" function
document.getElementById('enter').addEventListener('click', decide)

function decide () {
  // convert age number to integer
  const age = parseInt(document.getElementById('age').value)
  const day = document.getElementById('day').value
 // if age is less than 18, add message
 if (( day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") && (age < 18)) {
   document.getElementById('answer').innerHTML = 'Time for school!'
 } else if (( day !== "Saturday" || day !== "Sunday") && (age >= 18)) {
   document.getElementById('answer').innerHTML = 'Time to go to work'
 } else {
   document.getElementById('answer').innerHTML = 'It is the weekend! You can now relax!'
 }
 }
  