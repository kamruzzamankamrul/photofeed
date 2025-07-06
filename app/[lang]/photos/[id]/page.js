import PhotoDetails from '@/components/PhotoDetails'
import React from 'react'

export default function PhotoDetailsPage({params: {id, lang}}) {
  return (
    <div>
      <PhotoDetails id={id} lang={lang} />
    </div>
  )
}
