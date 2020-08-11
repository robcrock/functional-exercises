weapons_with_noises = [
  { name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek' },
  { name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars' },
  { name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who' },
  { name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars' },
  { name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black' },
];

function weaponsFromUniverse(universe) {
  // ...Your code here!
  const universeWeapons = weapons_with_noises.filter(
    weapon => weapon.universe === universe
  );

  return function(weaponParam) {
    const chosenWeapon = universeWeapons.filter(
      weapon => weapon.name === weaponParam
    );

    if (chosenWeapon.length === 0) {
      return `${weaponParam}is not a part of the ${universe} universe`;
    }
    return `used ${weaponParam}: ${chosenWeapon[0].noise}!`;
  };
}

// USAGE
// Closure around the universe weapons
const useStarWarsWeapon = weaponsFromUniverse('Star Wars');

// return the appropriate weapon from the universe
console.log(useStarWarsWeapon('Blaster'));

// console logs 'Noisy Cricket is not a part of the Star Wars universe'
console.log(useStarWarsWeapon('Noisy Cricket'));
