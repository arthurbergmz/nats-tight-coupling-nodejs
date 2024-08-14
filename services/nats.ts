import { connect, StringCodec } from "nats"

const natsAddress = process.env.NATS_ADDRESS || 'localhost:4222'
export const natsClient = await connect({ servers: natsAddress })
export const natsString = StringCodec()
