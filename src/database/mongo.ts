import 'dotenv/config'
import { connect } from 'mongoose'

export async function dbConnect(): Promise<void> {
  try {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
  } catch (error: any) {
    console.log(error.message)
  }
}