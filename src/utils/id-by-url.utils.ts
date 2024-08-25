export const getIdByUrl = (url: string) => url.split('/').at(-2) || '1'
