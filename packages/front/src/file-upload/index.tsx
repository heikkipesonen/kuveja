import * as React from 'react'
import axios from 'axios'
import { UploadingFile, FileUploadEvent, UploadedFile } from './types'
import { handleUploadError, fileId } from './support'
import './file-upload.scss'


export const FileInput: React.FC<{ onChange: (list: UploadingFile[]) => void }> = (props) => {

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files ? props.onChange(
      Array.from(e.target.files)
        .map(x => new UploadingFile(fileId(), x, 0))
    ) : null

  return (
    <div className="file-input">
      <h2>pls add files</h2>
      <p>
        oh wow much files, such extensions, much uploading
      </p>
      <input type="file" onChange={handleUpload} />
    </div>
  )
}

export const uploadFile = (x: UploadingFile, onProgress: (x: FileUploadEvent) => void) =>
  axios.post('kissa', x.file, {
    onUploadProgress: (e: ProgressEvent) => {
      onProgress(
        x.set('progress', e.loaded / e.total)
      )
    }
  })
    .then(() => onProgress(UploadedFile.from(x)))
    .catch(handleUploadError)


export const FileUpload: React.FC = () => {
  const [files, setFiles] = React.useState<FileUploadEvent[]>([])
  const addFiles = (x: FileUploadEvent[]) => setFiles([
    ...files,
    ...x
  ])

  React.useEffect(() => {
    console.log(files)
  }, [files])

  return (
    <div className="file-input-wrapper">    
      <div className="file-input-inner-wrapper">
        <FileInput onChange={addFiles} />
        <div className="file-list">
          {files.map(x => <File model={x} key={x.id} />)}
        </div>
        </div>
    </div>
  )
}

const File: React.FC<{ model: FileUploadEvent }> = (props) => (
  <div className="file">
    <div className="file-name">
      <span className="file-name-label">filename</span>
      {props.model.file.name}
    </div>
    <div className="file-progress">
      {props.model.kind === 'UploadingFile' ? <ProgressBar model={props.model.progress} /> : ''}
    </div>
  </div>
)

const ProgressBar: React.FC<{ model: number }> = (props) => (
  <div className="progress-bar">
    <div className="progress-bar--progress" style={{ width: props.model }} />
  </div>
)