import { createServer } from "node:http";
import { createApp, toNodeListener } from "h3";
import { registerNatsB } from "./nats/projectB.ts";
import { routerB } from "./routes/projectB.ts";

const appB = createApp()
appB.use(routerB)

registerNatsB()

createServer(toNodeListener(appB)).listen(3001, () => {
  console.log('Project B listening at :3001')
})
