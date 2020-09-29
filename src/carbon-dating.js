const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') return false;
  if (!(/^[0-9](.)^[0-9]/.test(sampleActivity) || /^[0-9]/.test(sampleActivity))) return false;
  const activity = parseFloat(sampleActivity);
  if (activity === 0 || activity < 0 || activity > 15) return false;
  const years = Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / 0.693);
  return years;
};
