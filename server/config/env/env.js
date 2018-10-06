import path from 'path'

const asyncConfig = async () => {
  const currentEnv = process.env.NODE_ENV;

  switch(currentEnv) {
    case 'development':
    case 'dev':
      console.log('Running in development environment');
      return await require('dotenv').config({ path: path.resolve(process.cwd(), 'config/env/.env.dev')});
    break;

    case 'production':
    case 'prod':
      console.log('Running in production environment');
      return await require('dotenv').config({ path: path.resolve(process.cwd(), 'config/env/.env.prod')}); 
    break;

    case 'testing':
    case 'test':
      console.log('Running in test environment');
      return await require('dotenv').config({ path: path.resolve(process.cwd(), 'config/env/.env.test')}); 
    break;
  }
}

asyncConfig()

export default asyncConfig