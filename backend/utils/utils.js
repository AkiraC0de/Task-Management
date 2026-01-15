const generateSixDigitCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const isAuthorizedForNewToken = (prevTokenCreatedTime) => {
  const COOLDOWN_TIME_IN_MS = 2 * 60 * 1000; // 2 minutes

  const timeDifference = new Date() - prevTokenCreatedTime; // Result is in milliseconds

  return timeDifference > COOLDOWN_TIME_IN_MS;
}

module.exports = { 
  generateSixDigitCode, 
  isAuthorizedForNewToken
};