export const load = async (data: { url: { pathname: string } }) => {
  return { pathname: data.url.pathname }
}
