import { natsClient, natsString } from "../services/nats.ts";
import { useCaseCharlie } from "../useCases/charlie.ts";

export async function registerNatsB () {
  console.log('Registering NATS B...');

  const subscription = natsClient.subscribe('charlie');
  (async (s) => {
    for await (const m of s) {
      const charlie = await useCaseCharlie()

      m.respond(natsString.encode(`${charlie}`))
    }
  })(subscription);

  console.log('NATS B registered CHARLIE!');
}
