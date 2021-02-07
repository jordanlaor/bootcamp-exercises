function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`;
}

const fortune = tellFortune('programmer', 'Tel Aviv', 'Sharon', 2);
