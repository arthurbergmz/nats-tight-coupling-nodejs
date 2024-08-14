import { createRouter, defineEventHandler } from "h3"
import { useCaseCharlie } from "../useCases/charlie.ts"

export const routerB = createRouter()

routerB.get('/charlie', defineEventHandler(async e => {
  const result = await useCaseCharlie()

  // must return { result: 5 } (beta 2 + charlie 3)
  return { result }
}))
