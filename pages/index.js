const links = [
  {
    title: 'Unoptimized Images',
    demo_url: '/unoptimized',
    sourc_url: ''
  }
];

export default function Home() {

  return (
    <div className="container-index">
      <h1>Next.js Images Tutorial: Examples</h1>
      <ul>
        {links.map((link) => 
          <li key={link.demo_url}>
            {link.title} (<a href={link.demo_url}>demo</a>) (<a href={link.source_url}>source</a>)
          </li>
        )}
      </ul>
    </div>
  )
}
