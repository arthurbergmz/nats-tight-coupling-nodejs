import { useProjectB } from "../services/projectB.ts"

const ALPHA = 1

export async function useCaseAlpha () {
  const projectB = useProjectB()

  const charlieResult = await projectB.getCharlie()

  return ALPHA + charlieResult
}
