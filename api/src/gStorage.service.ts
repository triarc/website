import { ConfigService } from '@nestjs/config'
import { FileStorageService } from './fileStorage.service'
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

  uploadFile(bucket: string, key: string, data: Buffer, folder?: string): Promise<void> {
    if (folder) {
      key = `${folder}/${key}`
    }
    return this.storage.bucket(bucket).file(key).save(data, {
      resumable: false,
      gzip: false,
    })
  }

  setup(): Promise<unknown> {
    return Promise.resolve(undefined)
  }

  tearDown(): Promise<void> {
    return Promise.resolve(undefined)
  }
}
