import { Heading } from '@/components/Heading'
import Image from 'next/image'


export function BPTG() {
const reporting = 'https://ik.imagekit.io/ATG/screenshots/reporting.png?updatedAt=1685448398694'
  
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="bptg">
          BPTG
        </Heading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere explicabo illum rem unde doloremque minus modi ipsa voluptate
          nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum
          autem ad.
        </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere explicabo illum rem unde doloremque minus modi ipsa voluptate
          nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum
          autem ad.
        </p>
        <Image 
        alt='image'
         src={reporting}
         width={1080}
         height={548}
         />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facere explicabo illum rem unde doloremque minus modi ipsa voluptate
          nesciunt excepturi cupiditate at animi fugit, accusamus possimus rerum
          autem ad.
        </p>
        <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
            src="https://www.youtube.com/embed/woCjlrBBJko" title="YouTube video player"
            allowFullScreen=""
            data-gtm-yt-inspected-2340190_699="true"
            id="240632615"
          ></iframe>
  </div>
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
