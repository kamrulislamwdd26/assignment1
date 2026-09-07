// Question No. 1

function describeValue(value) {
 
  let typeName = typeof value;
  

  let truthyOrFalsy;
  
  if (value) {
    truthyOrFalsy = "truthy";
  } else {
    truthyOrFalsy = "falsy";
  }
  
  
  return typeName + " | " + truthyOrFalsy;
}
// console.log(describeValue("hello"));
// console.log(describeValue(8809));
// console.log(describeValue(null));
// console.log(describeValue(""));



// Question No. 2


function getDayType(day) {
  
  let lowerDay = day.toLowerCase();

  
  switch (lowerDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

// console.log(getDayType("sunday"));
// console.log(getDayType("saturday"));



// Question No. 3

function validateUsername(username) {
  
  if (username.length < 4) {
    return "Too Short";
  }

  
  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  
  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  
  return "Available";
}
// console.log(validateUsername("sabbir"));
// console.log(validateUsername("md"));
// console.log(validateUsername("md sabbir"));
// console.log(validateUsername("admin"));


// Question No. 4



function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  
  let distanceFare;
  if (distance <= 2) {
    distanceFare = 50;
  } else {
    let extraKm = distance - 2;
    distanceFare = 50 + (extraKm * 15);
  }

  
  let waitingFare = waitingMinutes * 2;

  
  let totalFare = distanceFare + waitingFare;

  
  if (isNight) {
    totalFare = totalFare * 1.2;
  }

  return totalFare;
}
// console.log(getCngFare(50));
// console.log(getCngFare(5));
// console.log(getCngFare(1));
// console.log(getCngFare(5, false, 10));













// Question Node.5






const getChaseVerdict = (target, scored, ballsLeft) => {
  
  let runsNeeded = target - scored;

  
  if (runsNeeded <= 0) {
    return "Won";
  }

  
  if (ballsLeft <= 0) {
    return "Lost";
  }

  
  let requiredRate = (runsNeeded / ballsLeft) * 6;

  
  let verdict;
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

// console.log(getChaseVerdict(200, 200, 12));
// console.log(getChaseVerdict(200, 190, 0));  
// console.log(getChaseVerdict(100, 90, 12)); 
// console.log(getChaseVerdict(100, 80, 12));  
// console.log(getChaseVerdict(100, 70, 12));  
// console.log(getChaseVerdict(150, 149, 1));  
