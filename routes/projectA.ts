import { createRouter, defineEventHandler } from "h3"
import { useCaseAlpha } from "../useCases/alpha.ts"
import { useCaseBeta } from "../useCases/beta.ts"

export const routerA = createRouter()

routerA.get('/alpha', defineEventHandler(async e => {
  const result = await useCaseAlpha()

  // must return { result: 6 } (alpha 1 + beta 2 + charlie 3)
  return { result }
}))

routerA.get('/beta', defineEventHandler(e => {
  const result = useCaseBeta()

  // must return { result: 2 } (beta 2)
  return { result }
}))
