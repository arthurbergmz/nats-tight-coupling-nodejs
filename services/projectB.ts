import { Empty } from "nats";
import { natsClient, natsString } from "./nats.ts";

export function useProjectB () {
  return {
    async getCharlie () {
      console.log('Requesting CHARLIE to Project B...')
      const charlieResponse = await natsClient.request('charlie', Empty, { timeout: 1000 })
      const charlie = +natsString.decode(charlieResponse.data)
      console.log('Project B response to CHARLIE:', charlie)
      
      return charlie
    }
  };
}
