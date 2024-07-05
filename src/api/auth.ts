import axios from './axios.ts'
import { FieldValues } from 'react-hook-form'

const API = 'https://bober-eight.vercel.app/api'

export const registerRequest = (user: FieldValues) => axios.post(`/register`, user)
export const loginRequest = (user: FieldValues) => axios.post(`/login`, user)
export const verifyTokenRequest = (token: any) => axios.get('/auth/verify', token)