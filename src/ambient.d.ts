// Used to make the svelte lint shut up about not recognizing imported images

declare module '*.jpg' {
  const value: unknown
  export = value
}

declare module '*.png' {
  const value: unknown
  export = value
}

declare module '*.webp' {
  const value: unknown
  export = value
}

declare module '*.avif' {
  const value: unknown
  export = value
}

// If typescript ever does multi-wildcards can be replaced by *.jpg?*
declare module '*&enhanced' {
  const value: unknown
  export = value
}
