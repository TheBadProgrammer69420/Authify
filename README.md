# Authjs

## Table of contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)

## Features
- ** Appwrite auth **
This auth library uses appwrite as the base

- ** Sign Up function **
This sign up function is very easy to implement

- ** Sign In function **
This sign in function is also very easy to implement

## Warning⚠️⚠️⚠️⚠️
Every redirect should be written by yourself, I recommend a different onSubmit function that implements both the signIn and signUp functions like this next js example:
```js
import {useRouter} from 'next-navigation'
import {signUp, signIn} from 'authify'

export const App = () => {

  async function onSubmit(){
      const router = useRouter()
  
      if(signin){
        await signIn("email@gmail.com", "1234") //email, password
        router.push('/')
      }

      else if(signup){
        await signup("name", "email@gmail.com" , "1234") //username, email, password
        router.push('/')
      }
  }

  return(
    <button onclick={onSubmit}>Sign up or sign in</button>
  )
}
```

This library is enviornment variables dependent. So create a file called ".env" not ".envlocal"
Here are the EXACT contents that should be here:
```env
    APPWRITE_ENDPOINT=Endpoint
    APPWRITE_PROJECT_ID=projectid
```

## Installation
```bash
npm i authify
```

## Usage
Here is a brief example of how you should use authify:

```js
import {useNavigation} from 'next-navigation'
import {signUp, signIn} from 'authify'

export const App = () => {

  async function onSubmit(){
      const router = useNavigation()
  
      if(signin){
        await signIn("email@gmail.com", "1234") //email, password
        router.push('/')
      }

      else if(signup){
        await signup("name", "email@gmail.com" , "1234") //username, email, password
        router.push('/')
      }
  }

  return(
    <button onclick={onSubmit}>Sign up or sign in</button>
  )
}
```
