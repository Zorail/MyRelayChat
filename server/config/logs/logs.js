import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import rfs from 'rotating-file-stream'

const logDirectory = path.join(__dirname, 'log');

const result = fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

const logFileName = process.env.NODE_ENV === 'production'
                    ? 'logs.log'
                    : (process.env.NODE_ENV) === 'development' ? 'dev.log' : 'test.log'

const logStream = rfs((logFileName || 'dev.log'), {
  interval: '1d',
  path: logDirectory
})

const logs = app => {
    const env = process.env.NODE_ENV
    switch(env) {
      case 'development':
        app.use(morgan('dev', {
          skip: function (req, res) { return res.statusCode < 400 }
        }))
        app.use(morgan('short', {
          stream: logStream
        }))
        break
      case 'production':
        app.use(morgan('combined', { stream: logStream}))
        break
      case 'testing':
        app.use(morgan('common', { stream: logStream}))
        break
      default:
        app.use(morgan('dev', {
          skip: function (req, res) { return res.statusCode < 400 }
        }))
        app.use(morgan('common', {
          skip: function (req, res) { return res.statusCode < 400 },
          stream: logStream
        }))
        break;
    }
}

export default logs;