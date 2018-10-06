import mongoose from 'mongoose';

const mongoUrl = `${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`
const mongodb = mongoose.connection;
const mongoConnect = new Promise((resolve, rejects) => {
  mongodb.once('open', () => {
    console.log(`🚀 Connected to ${mongoUrl} nosql mongo database`)
		resolve(mongodb)
  })
  mongodb.on('error', () => {
		console.error(`error  connection to mongodb database`)
		reject(new Error("Error connection to mongodb"))
	})
})

const resolveMongo = async () => await mongoConnect

export {
  mongoConnect,
  resolveMongo
}