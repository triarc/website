export interface FileStorageService {
  getDefaultBucket(): string
  uploadFile(bucket: string, key: string, data: Buffer, folder?: string): Promise<void>
  setup(): Promise<unknown>
  tearDown(): Promise<void>
}

export interface FileItem {
  key: string
  versionId: string
}
