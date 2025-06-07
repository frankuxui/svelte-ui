export function cx(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}