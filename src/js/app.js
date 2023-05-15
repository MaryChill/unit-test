// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function checkHealth(userHealth) {
  let findHealth;
  if (userHealth.health >= 50) {
    findHealth = 'healthy';
  } else if (userHealth.health < 50 && userHealth.health >= 15) {
    findHealth = 'wounded';
  } else if (userHealth.health < 15) {
    findHealth = 'critical';
  }
  return findHealth;
}
