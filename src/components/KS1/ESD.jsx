import { Heading } from '@/components/Heading'
import Image from 'next/image'




export function ESD() {
const contacts = 'https://ik.imagekit.io/ATG/screenshots/contacts.png?updatedAt=1685448397739'

  return (
    <>
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="esd">
        ESD
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
      <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam.</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde doloremque minus modi ipsa voluptate nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum autem ad.
        </p>
         <Image
          alt='image'
           src={contacts}
           width={1080}
           height={548}
             />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde doloremque minus modi ipsa voluptate nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum autem ad.
        </p>
      </div>
         
    </>

      )
}
