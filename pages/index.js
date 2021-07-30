const links = [
  {
    title: 'Standard <img> tag',
    demo_url: '/standard-img-tag',
    sourc_url: ''
  },
  {
    title: 'Unoptimized Images with the <Image> Component',
    demo_url: '/unoptimized-images',
    sourc_url: ''
  },
  {
    title: 'Better format, size and resolution',
    demo_url: '/better-format-size-resolution',
    sourc_url: ''
  }
];

export default function Home() {

  return (
    <div className="container-index">
      <h1>Next.js Images Tutorial: Examples</h1>
      <table>
        {links.map((link) => 
          <tr key={link.demo_url}>
            <th>{link.title}</th>
            <td><a href={link.demo_url}>demo</a></td>
            <td><a href={link.source_url}>source</a></td>
          </tr>
        )}
      </table>
    </div>
  )
}
