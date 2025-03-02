import { Event } from "nostr-tools"

export const uniqBy = <T>(arr: T[], key: keyof T): T[] => {
    return Object.values(
      arr.reduce(
        (map, item) => ({
          ...map,
          [`${item[key]}`]: item,
        }),
        {},
      ),
    )
  }
  
export const uniqValues = (value: string, index: number, self: string[]) => {
  return self.indexOf(value) === index
}

export const dateToUnix = (_date?: Date) => {
  const date = _date || new Date()

  return Math.floor(date.getTime() / 1000)
}

export interface Metadata {
  name?: string
  username?: string
  display_name?: string
  picture?: string
  banner?: string
  about?: string
  website?: string
  lud06?: string
  lud16?: string
  nip05?: string
}

export const getMetadata = (event: Event) => {
  const metadata: Metadata = JSON.parse(event.content)
  return metadata
}