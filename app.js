const express = require('express')
const logger = require('morgan')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(logger('dev'))
app.use(cors({
    origin: ['https://www.avril14th.org']
}))

app.post('/submit_pfb', async (req, res) => {
  const apiPath = `${req.body.gateway}:${req.body.port}/submit_pfb`
  const payload = {
    namespace_id: req.body.namespaceId,
    data: req.body.txData,
    gas_limit: req.body.gasLimit,
    fee: req.body.gasFee
  }

  await axios.post(apiPath, payload)
  .then(response => {
    //console.log('******************',apiPath, payload,response.data)
    response.data.proxyError = false
    res.send(response.data)
  })
  .catch(err => {
    res.send({ err, proxyError: true })
  })
})

app.get('/check_shares', async (req, res) => {
  const apiPath = `${req.query.gateway}:${req.query.port}/namespaced_shares/${req.query.namespaced_shares}/height/${req.query.height}`
  await axios.get(apiPath)
  .then(response => {
    response.data.proxyError = false
    res.send(response.data)
  })
  .catch(err => {
    res.send({ err, proxyError: true })
  })
})

/* NOT ALLOWED by mintscan
app.get('/check_transaction', async (req, res) => {
  const apiPath = `https://api.mintscan.io/v1/celestia-incentivized-testnet/txs/hash/${req.query.txhash}`
  await axios.get(apiPath)
  .then(response => {
    response.data.proxyError = false
    res.send(response.data)
  })
  .catch(err => {
    res.send({ err, proxyError: true })
  })
})
*/
module.exports = app