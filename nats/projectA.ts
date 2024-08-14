import { useCaseBeta } from "../useCases/beta.ts";
import { natsClient, natsString } from "../services/nats.ts";

export async function registerNatsA () {
  console.log('Registering NATS A...');

  const subscription = natsClient.subscribe('beta');
  (async (s) => {
    for await (const m of s) {
      const beta = useCaseBeta()

      m.respond(natsString.encode(`${beta}`))
    }
  })(subscription);

  console.log('NATS A registered BETA!');
}
