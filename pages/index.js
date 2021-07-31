const baseGithubUrl = 'https://github.com/kkomelin/nextjs-image-optimization-examples/blob/main/pages/';

const link = (title, name) => {
  return {
    title,
    demo_url: `/${name}`,
    source_url: `${baseGithubUrl}${name}.js`
  }
}

const links = [
  link('Standard <img> tag', 'standard-img-tag'),
  link('Unoptimized Next.js Images', 'unoptimized-images'),
  link('Better format, size and resolution', 'better-format-size-resolution'),
  link('Responsive images', 'responsive-images'),
  link('Lazy loading', 'lazy-loading'),
  link('Default placeholder image', 'default-placeholder-image'),
  link('Custom placeholder image', 'custom-placeholder-image'),
  link('Image preload', 'image-preload'),
];

export default function Home() {

  return (
    <div className="container-index">
      <h1>Next.js Images Tutorial: Examples</h1>
      <table>
        <tbody>
          {links.map((link) => 
            <tr key={link.demo_url}>
              <th>{link.title}</th>
              <td><a href={link.demo_url}>demo</a></td>
              <td><a href={link.source_url}>source</a></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
