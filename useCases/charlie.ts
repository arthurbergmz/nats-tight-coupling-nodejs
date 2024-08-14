import { useProjectA } from "../services/projectA.ts"

const CHARLIE = 3

export async function useCaseCharlie () {
  const projectA = useProjectA()
  const betaResult = await projectA.getBeta()

  // throw new Error('OOPS CHARLIE!')
  // an error will be seen as NatsError: TIMEOUT here, in Project B, if not handled in Project A
  
  const response = CHARLIE + betaResult

  return response
}
