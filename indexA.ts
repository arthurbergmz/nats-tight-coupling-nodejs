import { createServer } from "node:http";
import { createApp, toNodeListener } from "h3";
import { registerNatsA } from "./nats/projectA.ts";
import { routerA } from "./routes/projectA.ts";

const appA = createApp()
appA.use(routerA)

registerNatsA()

createServer(toNodeListener(appA)).listen(3000, () => {
  console.log('Project A listening at :3000')
})
