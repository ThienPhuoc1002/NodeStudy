import request from 'supertest'
import mongoose from 'mongoose'
import app from '../app.js'
import { User } from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config()

describe('GET /users', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_TEST_URI)
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  beforeEach(async () => {
    await User.deleteMany({})
    await User.create({
      name: 'Test',
      email: 'test@test.com'
    })
  })

  it('should return users', async () => {
    const res = await request(app).get('/users')

    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBe(1)
  })
})
