import { gridItems } from '@/data'
import React from 'react'
import { BentoGrid, BentoGridItem } from './effect-ui/BentoGrid'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(item =>
          <BentoGridItem
            key={item.id}
            {...item}
          />
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid