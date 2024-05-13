//What exercise activity will be dont for the day 

function whichActivity() {
    const activities = ['Running', 'Swimming', 'Dancing', 'Fencing'];
    const randomActivity = Math.floor(Math.random() * activities.length); //will choose a random activity to do that day from the activities array
    return activities[randomActivity];
}

function exerciseOfTheDay() {
    const activity = whichActivity();
    return (`Today's exercise: ${activity}`)
}

console.log(exerciseOfTheDay());