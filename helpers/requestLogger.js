const chalk = require("chalk")
const onFinished = require("on-finished")

const getActualRequestDurationInMilliseconds = (start) => {
  const NS_PER_SEC = 1e9 //  convert to nanoseconds
  const NS_TO_MS = 1e6 // convert to milliseconds
  const diff = process.hrtime(start)
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

const statusColorizer = (status) => {
  if (status >= 500) {
    return chalk.red(status)
  }

  if (status >= 400) {
    return chalk.yellow(status)
  }

  if (status >= 300) {
    return chalk.cyan(status)
  }

  if (status >= 200) {
    return chalk.green(status)
  }

  return status
}

//middleware function
let requestLogger = (req, res, next) => {
  const start = process.hrtime()
  let current_datetime = new Date()
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds()

  onFinished(res, () => {
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start)
    let method = req.method
    let url = req.originalUrl
    let status = res.statusCode

    const coloredDate = chalk.blue(formatted_date)
    const coloredMethod = chalk.magenta(method)
    const coloredStatus = statusColorizer(status)
    // const coloredStatus = chalk.cyan(status)
    const coloredDuration = chalk.red(
      `${durationInMilliseconds.toLocaleString()} ms`
    )

    let log = `[${coloredDate}] ${coloredMethod} ${url} ${coloredStatus} ${coloredDuration}`
    console.info(log)

    if (Object.keys(req.query).length > 0)
      console.info(chalk.blue(`Query: ${JSON.stringify(req.query)}`))
    if (Object.keys(req.params).length > 0)
      console.info(chalk.blue(`Params: ${JSON.stringify(req.params)}`))
    if (Object.keys(req.body).length > 0)
      console.info(chalk.blue(`Body: ${JSON.stringify(req.body)}`))
  })

  next()
}

module.exports = requestLogger
