// Home Page
export const HoyaBanner = {
  heading: 'Hoyas',
  imgSrc: 'https://kiwigardenermagazine.co.nz/wp-content/uploads/sites/4/2021/05/June-Hoya.jpg'
}

export const AroidsBanner = {
  heading: 'Aroids',
  imgSrc: 'https://mymodernmet.com/wp/wp-content/uploads/2021/05/popular-houseplants-1.jpg'
}

export const WelcomeMessage = () => {
  return <>
    <strong>Welcome!</strong> New here? Sign up a free account and buy plants from us worry-free!
  </>
}

export const Links = () => {
  return <>
    <a href='/Signup' className='ps-3 pe-2'>Singn up now</a>
    Or 
    <a href='/Login' className='ps-2'>Log in</a>
  </>
}

// Cart
export const cartMessage = `You are shopping as guest user.`