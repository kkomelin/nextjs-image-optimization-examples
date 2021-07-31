export default function NativeImgTag() {
  return (
    <div className="container">
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <img 
        src="/sunset1.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <img 
        src="/mountains1.jpg" 
        alt="Mountains" 
        width={600} 
        height={450} 
      />

      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~1.9mb */}
      <img 
        src="/sunset2.jpg" 
        alt="Sunset" 
        width={600} 
        height={450} 
      />
      
      {/* Original resolution: 4032x3024 (4x3) */}
      {/* Original size: ~2.3mb */}
      <img 
        src="/mountains2.jpg" 
        alt="Mountains" 
        width={600} 
        height={450} 
      />
    </div>
  )
}
