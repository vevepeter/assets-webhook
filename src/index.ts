import axios, { AxiosResponse } from 'axios'
import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'
import fs from 'fs'
import pathjs from 'path'
import { last } from 'lodash'

const STATIC_FOLDER = 'serve'
const FOLDER = `${__dirname}/../${STATIC_FOLDER}`
const PORT = 3030

type VevWebhook = {
  event: 'PUBLISH' | 'PING' | 'UNPUBLISH'
  hosting: string
  id: string
  payload: VevWebhookPayload
}

type VevWebhookPayload = {
  /**
   * List of URLs to assets needed to be downloaded
   */
  assets: string[]
  /**
   * Name of directory assets are assumed to be in
   */
  assetsFolder?: string
  /**
   * Project path
   */
  dir: string
  /**
   * List of URLs to HTML files needed to be downloaded
   */
  htmlFiles: string[]
  /**
   * Unique Project ID
   */
  projectId: string
  /**
   * Project version
   */
  version: number
}

const ensureFolder = (directory: string) => {
  if (!fs.existsSync(directory))
    fs.mkdirSync(directory)
}

const get = (url: string) => axios.get(url, { responseType: 'stream' })

const normalizeFileName = (uri: string): string =>
  last(uri.replace(/%2F/g, '/').split('/')) || ''

const writeFile = async (_path: string, response: AxiosResponse) => {
  const path = FOLDER + '/' + _path

  ensureFolder(pathjs.dirname(path))

  const writer = fs.createWriteStream(path)

  response.data.pipe(writer)

  await new Promise<void>((resolve, reject) => {
    writer.on('finish', () => {
      console.log('+ Download complete ' + response.request.path)
      resolve()
    })
    writer.on('error', reject)
  })
}


const app = express()

// This webhook receiver has zero(!) authentication to keep this example simple.
// Please add, if using this example for anything other than testing.
// Here would be a good place to add middleware for this.

// Receiver of webhook calls
app.post('/receiver', [bodyParser.json()], (req: Request, res: Response) => {
  const { event, id, payload } = req.body as VevWebhook
  console.log(`. Received hook #${id}`, event)

  if (event === 'PUBLISH') {
    ensureFolder(FOLDER)

    { // download assets
      const { assetsFolder, assets } = payload
      if (!assetsFolder) throw new Error('Missing assetsFolder in payload')

      ensureFolder(FOLDER + '/' + assetsFolder)

      assets.map(url =>
        get(url)
          .then(async (res) => writeFile(assetsFolder + '/' + normalizeFileName(url), res)))
    }

    // download HTML files
    payload
      .htmlFiles
      .map(url =>
        get(url)
          .then(async (res) => writeFile(normalizeFileName(url), res)))

    return res.send('OK')
  } else if (event === 'PING') {
    return res.send('PUNG')
  }

  return res.status(404).send('Event type not supported')
})

// Serve static content
app.use(express.static(STATIC_FOLDER))

// 404 handler
app.use((req, res) => {
  console.log('404', req.path)

  res
    .status(404)
    .send('not found')
})

app.listen(PORT, () => console.log(`🎉 Server is up and running on ${PORT}`))
