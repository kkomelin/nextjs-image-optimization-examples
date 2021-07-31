import Image from 'next/image';
import mountains1 from '../public/mountains1.jpg';
import mountains2 from '../public/mountains2.jpg';
import sunset1 from '../public/sunset1.jpg';
import sunset2 from '../public/sunset2.jpg';

export default function DefaultPlaceholderImage() {
  return (
    <div className="container">
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image
        src={sunset1} 
        alt="Sunset" 
        width={600} 
        height={450} 
        layout="responsive"
        placeholder="blur"
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <Image 
        src={mountains1} 
        alt="Mountains" 
        width={600} 
        height={450} 
        layout="responsive"
        placeholder="blur"
      />

      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image 
        src={sunset2} 
        alt="Sunset" 
        width={600} 
        height={450} 
        layout="responsive"
        placeholder="blur"
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <Image 
        src={mountains2} 
        alt="Mountains" 
        width={600} 
        height={450} 
        layout="responsive"
        placeholder="blur"
      />
    </div>
  )
}
