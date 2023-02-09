// https://leetcode.cn/problems/boats-to-save-people/solution/

const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b)
  let ship = 0
  let lightest = 0, heavy = people.length - 1
  while(lightest <= heavy) {
    if (people[lightest] + people[heavy] <= limit) {
      lightest++
    }
    heavy--
    ship++
  }

  return ship
}