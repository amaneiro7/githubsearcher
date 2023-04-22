import { apiUrl } from '../config'

export const searchUser = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${apiUrl}${search}`)
    return response.json()
  } catch (error) {
    throw new Error('Error searching user')
  }
}
