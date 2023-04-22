import { apiUrl } from '../config'

export const searchUser = async ({ search }) => {
  if (search === '') return null
  const response = await fetch(`${apiUrl}${search}`)
  return await response.json()
}
