import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import contactRoutes from './routes/contactRoutes.js'

const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '10kb' }))
app.get('/api/health', (_req,res) => res.json({ status:'ok', message:'Portfolio API is running' }))
app.use('/api/contact', contactRoutes)
app.use((err,_req,res,_next) => {
  console.error(err)
  res.status(500).json({ message:'An unexpected server error occurred.' })
})
const PORT = process.env.PORT || 5000
try {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mirza_portfolio')
  console.log('MongoDB connected')
  app.listen(PORT, () => console.log(`Portfolio API running on http://localhost:${PORT}`))
} catch (error) {
  console.error('MongoDB connection failed:', error.message)
  process.exit(1)
}
