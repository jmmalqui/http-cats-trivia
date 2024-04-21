import { RandomNumber } from "./RandomNumber";

export function getRandomKeyFromMap(map: Record<string, string>) {
  let map_keys: string[] = Object.keys(map);
  return map_keys[Math.floor(Math.random() * map_keys.length)];
}

export function getRandomKeysFromMap(
  map: Record<string, string>,
  ignore: string
) {
  let map_keys: string[] = [];
  let correct_answer_idx: number = RandomNumber(0, 3);
  let idx = 0;
  while (map_keys.length < 4) {
    let random_key = getRandomKeyFromMap(map);

    if (map_keys.includes(random_key)) {
      continue;
    }
    if (idx == correct_answer_idx) {
      console.log("Adding " + ignore);
      map_keys.push(ignore);
      idx += 1;
      continue;
    }

    if (random_key == ignore) {
      continue;
    }
    map_keys.push(random_key);
    idx += 1;
  }
  return map_keys;
}
