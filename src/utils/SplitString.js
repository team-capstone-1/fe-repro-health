export default function splitString(value) {
  return value?.split(", ").map((item) => item);
}
