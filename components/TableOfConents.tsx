import React from 'react'
import { Toc } from 'pliny/mdx-plugins'
import { TocItem } from 'pliny/mdx-plugins/remark-toc-headings'

interface Props {
  toc: Toc
  depthLevel?: number
}

export default function TableOfContents({ toc, depthLevel = 2 }: Props) {
  const lowestDepth = toc.reduce((acc, item) => (item.depth < acc ? item.depth : acc), 6)
  const filteredToc = toc.filter((item) => item.depth <= lowestDepth + depthLevel - 1)

  return (
    <ul className="text-sm">
      {filteredToc.map((item: TocItem) => (
        <li key={item.url}>
          <a
            key={item.url}
            href={item.url}
            className="block p-2 hover:text-primary-500 hover:underline"
            style={{ paddingLeft: `${item.depth - lowestDepth}rem` }}
          >
            {item.value}
          </a>
        </li>
      ))}
    </ul>
  )
}
