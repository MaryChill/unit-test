// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function checkHealth(userHealth) {
  if (userHealth.health >= 50) {
    return 'healthy';
  } if (userHealth.health < 50 && userHealth.health >= 15) {
    return 'wounded';
  } if (userHealth.health < 15) {
    return 'critical';
  }
}
