import Image from 'next/image';

export default function BetterFormatSizeResolution() {
  return (
    <div className="container">
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image
        src="/sunset1.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
        loading="eager"
        layout="fixed"
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <Image 
        src="/mountains1.jpg" 
        alt="Mountains" 
        width={600} 
        height={450} 
        loading="eager"
        layout="fixed"
      />

      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <Image 
        src="/sunset2.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
        loading="eager"
        layout="fixed"
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <Image 
        src="/mountains2.jpg" 
        alt="Mountains" 
        width={600} 
        height={450} 
        loading="eager"
        layout="fixed"
      />
    </div>
  )
}
