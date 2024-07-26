// Used to make the svelte lint shut up about not recognizing imported images
// Unknown type might be better but image src does not accept it so any will be used until a better solution is available
declare module '*.jpg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}
declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}
declare module '*.webp' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}
declare module '*.avif' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}

// If typescript ever does multi-wildcards can be replaced by *.jpg?*

declare module '*&enhanced' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any
  export = value
}
