export const border = Object.entries(
  import.meta.glob("$lib/images/borders/*", { as: "url", eager: true })
).map(([path, src]) => ({
  path,
  src,
  key: path.replace(/(^.*border_)(.*)(.png)$/, "$2")
}))

export function resolveBorderSrc(key: string) {
  return border.find(b => b.key === key)?.src
}

export const icon = Object.entries(
  import.meta.glob("$lib/images/icons/*", { as: "url", eager: true })
).map(([path, src]) => ({
  path,
  src,
  key: path.replace(/(^.*emblem_)(.*)(.png)$/, "$2")
}))

export function resolveIconSrc(key: string) {
  return icon.find(b => b.key === key)?.src
}

export const faction = Object.entries(
  import.meta.glob("$lib/images/factions/*", { as: "url", eager: true })
).map(([path, src]) => ({
  path,
  src,
  key: path.replace(/(^.*\/)(.*)(.png)$/, "$2")
}))

export function resolveFactionSrc(key: string) {
  return faction.find(b => b.key === key)?.src
}

export const ring = Object.entries(
  import.meta.glob("$lib/images/rings/*", { as: "url", eager: true })
).map(([path, src]) => ({
  path,
  src,
  key: path.replace(/(^.*ring-)(.*)(.png)$/, "$2")
}))

export function resolveRingSrc(key: string) {
  return ring.find(b => b.key === key)?.src
}

export { default as bg_00 } from "./bg_00.png"
export { default as gradient } from "./gradient.png"
export { default as hooks } from "./hooks.png"