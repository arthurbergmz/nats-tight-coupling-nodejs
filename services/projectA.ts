import { Empty, NatsError } from "nats";
import { natsClient, natsString } from "./nats.ts";

export function useProjectA () {
  return {
    async getBeta () {
      console.log('Requesting BETA to Project A...')
      const betaResponse = await natsClient.request('beta', Empty, { timeout: 1000 })

      // if no subject handler is found, will throw NatsError: 503 (ErrNoResponders)

      const beta = +natsString.decode(betaResponse.data)
      console.log('Project A response to BETA:', beta)
      
      return beta
    }
  };
}
