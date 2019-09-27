
type FileState = 'error' | 'progress' | 'complete'

export class UploadingFile {
  public readonly kind = 'UploadingFile'
  constructor (
    public readonly id: string,
    public readonly file: File,
    public readonly progress: number    
  ) {}  

  public set = <T extends keyof UploadingFile>(key: T, value: UploadingFile[T]) => 
    UploadingFile.from({
      ...this,
      [key]: value
    })

  public static from = (x: { id: string, file: File, progress: number }) => 
    new UploadingFile(x.id, x.file, x.progress)
}

export class UploadedFile {
  public readonly kind = 'UploadedFile'
  constructor (
    public readonly id: string,
    public readonly file: File,
  ) {}

  public static from = (x: FileUploadEvent) => new UploadedFile(x.id, x.file)
}

export type FileUploadEvent = UploadingFile | UploadedFile
