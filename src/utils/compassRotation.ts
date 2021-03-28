const tailwindRotate = "rotate-";

const ROTATION = {
  N: tailwindRotate + "0",
  NE: tailwindRotate + "45",
  E: tailwindRotate + "90",
  SE: tailwindRotate + "135",
  S: tailwindRotate + "180",
  SW: tailwindRotate + "225",
  W: tailwindRotate + "270",
  NW: tailwindRotate + "315",
};

/**
 * @returns simply a Tailwind rotate class based on wind direction
 * @deprecated all this function is
 */
export function compassRotation(direcionInDegrees: number) {
  direcionInDegrees = Number(direcionInDegrees.toFixed(1));
  if (direcionInDegrees > 337.5 || direcionInDegrees < 22.4) return ROTATION.N;
  else if (direcionInDegrees > 22.5 && direcionInDegrees < 67.4)
    return ROTATION.NE;
  else if (direcionInDegrees > 67.5 && direcionInDegrees < 112.4)
    return ROTATION.E;
  else if (direcionInDegrees > 112.5 && direcionInDegrees < 157.4)
    return ROTATION.SE;
  else if (direcionInDegrees > 157.5 && direcionInDegrees < 202.4)
    return ROTATION.S;
  else if (direcionInDegrees > 202.5 && direcionInDegrees < 247.4)
    return ROTATION.SW;
  else if (direcionInDegrees > 247.5 && direcionInDegrees < 292.4)
    return ROTATION.W;
  else return ROTATION.NW;
}
