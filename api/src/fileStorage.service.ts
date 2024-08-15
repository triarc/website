export interface FileStorageService {
  getDefaultBucket(): string
  listFiles(bucket: string, path: string): Promise<FileItem[]>
  deleteFile(bucket: string, key: string): Promise<void>
  uploadFile(bucket: string, key: string, data: Buffer, folder?: string): Promise<void>
  getFileStream(bucket: string, key: string): Promise<NodeJS.ReadableStream>
  getSignedUrl(bucket: string, key: string, expiresInSeconds: number): Promise<string>
  setup(): Promise<unknown>
  tearDown(): Promise<void>
}

export interface FileItem {
  key: string
  versionId: string
}
