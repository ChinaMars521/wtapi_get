/* eslint-disable */

export class ExternalObject<T> {
  readonly '': {
    readonly '': unique symbol
    [K: symbol]: T
  }
}
export function plus100(input: number): number
export interface Pet {
  body: string
  statusCode: number
  headers: Record<string, string>
}
export function sum(a: number, b: number): number
export interface Config {
  method?: string | undefined | null
  url: string
  body?: Record<string, string> | undefined | null
}
export interface Pet1 {
  body: Record<string, string>
}
export interface DonConfig {
  taskNum: number
  url: string
  path: string
  fileName: string
}
export function wtDownload(dm: DonConfig): void
export function wtaxios(configop: Config): Pet1
