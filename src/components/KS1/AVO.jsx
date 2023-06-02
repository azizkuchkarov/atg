import { Heading } from '@/components/Heading'
import Image from 'next/image'

import { ImageContainer } from './imageContainer'


export function AVO() {
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="avo1">
          AVO
        </Heading>

       
        <ImageContainer/>
        
             <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere explicabo illum rem unde doloremque minus modi ipsa voluptate
          nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum
          autem ad.
        </p>
      </div>
    </>
  )
}
