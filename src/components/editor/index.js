import React, { useCallback } from 'react'
import BraftEditor from 'braft-editor'
import { uploadFile } from '@/service/user'

export default function JGEditor (props) {
  // 上传文件
  const uploadFn = useCallback(async (media) => {
    const onUploadProgress = function (event) {
      media.progress(event.loaded / event.total * 100)
    }
    const res = await uploadFile(media.file, onUploadProgress)
    if (res.status === 0) {
      media.success({
        url: res.data.imgUrl
      })
    } else {
      media.error({
        msg: '上传失败'
      })
    }
  }, [])
  return (
    <BraftEditor
      value={props.content}
      onChange={props.contentChange}
      media={
        {
          uploadFn,
          accepts: {
            image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
          }
        }
      }
    />
  )
}
