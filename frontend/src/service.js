import { UserBaseURL } from './enviroment'
import axios from 'axios'

/* 
  Services
*/
export const getAuthToken = () => localStorage.getItem('userToken-PoshPlants')

export const getUserEmail = () => localStorage.getItem('userEmail-PoshPlants')

export const getUserName = () => localStorage.getItem('userName-PoshPlants')

export const signOut = () => {
  localStorage.removeItem('userToken-PoshPlants')
  localStorage.removeItem('userEmail-PoshPlants')
  localStorage.removeItem('userName-PoshPlants')
  isAdmin() && localStorage.removeItem('adminUser')
  window.location.reload()
}

// Check if all form fileds have value, if not disable login button
export const isDisabled = formData => !Object.values(formData).every(prop => prop)

// If the user have admin right
export const isAdmin = () => localStorage.getItem('adminUser')

export const headerConfig = {
  headers: {
    'Authorization': 'Bearer ' + getAuthToken()
  }
}

// Authticate admin
export const authoriseAdmin = async email => {
  let granted = false
  await axios.post(`${UserBaseURL}admin-auth`, {email: email}, headerConfig)
    .then(res => granted = true)
    .catch(err => {
      console.log(err)
    })
  return granted
}

export const isAuthorised = async () => await authoriseAdmin(getUserEmail()) ?  true : alert('ERROR: Something went wrong verifing your permission, please log out and log back in to try again.')