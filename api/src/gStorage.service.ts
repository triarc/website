import { ConfigService } from '@nestjs/config'
import { FileItem, FileStorageService } from './fileStorage.service'
import { Storage } from '@google-cloud/storage'
import { Injectable } from '@nestjs/common'

export interface GStorageKey {
  type: string
  project_id: string
  private_key_id: string
  private_key: string
  client_email: string
  client_id: string
  auth_uri: string
  token_uri: string
  auth_provider_x509_cert_url: string
  client_x509_cert_url: string
}

@Injectable()
export class GStorageService implements FileStorageService {
  private readonly gStorageKey: GStorageKey
  private readonly bucketName: string
  private storage: Storage

  constructor(private config: ConfigService) {
    this.gStorageKey = JSON.parse(this.config.get('GSTORAGE_ACCOUNT_KEY'))
    this.storage = new Storage({ credentials: this.gStorageKey })
    this.bucketName = this.config.get('GSTORAGE_BUCKET_NAME')
  }

  getDefaultBucket(): string {
    return this.bucketName
  }

  async getSignedUrl(bucket: string, key: string, expiresInSeconds: number): Promise<string> {
    const expires = Date.now() + 1000 * expiresInSeconds
    ;(global as any).window = undefined // NODE 20 support
    const [url] = await this.storage.bucket(bucket).file(key).getSignedUrl({
      action: 'read',
      expires,
    })

    return url
  }

  listFiles(bucket: string, path: string): Promise<FileItem[]> {
    return
  }

  async deleteFile(bucket: string, key: string): Promise<void> {
    return
  }

  uploadFile(bucket: string, key: string, data: Buffer, folder?: string): Promise<void> {
    if (folder) {
      key = `${folder}/${key}`
    }
    return this.storage.bucket(bucket).file(key).save(data, {
      resumable: false,
      gzip: false,
    })
  }

  async getFileStream(bucket: string, key: string): Promise<NodeJS.ReadableStream> {
    return
  }

  setup(): Promise<any> {
    return Promise.resolve(undefined)
  }

  tearDown(): Promise<any> | Promise<void> {
    return Promise.resolve(undefined)
  }
}
