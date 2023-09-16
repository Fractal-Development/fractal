import React, { forwardRef } from 'react'

import { Text } from '../../text'
import { Box } from '../Box'
import { HorizontalLayer } from '../HorizontalLayer'
import { getTableContainerAccessibilityProps } from './accessibility/getTableContainerAccessibilityProps'
import { TableContainerProps, TextColorVariant } from './types'

const TableContainer = forwardRef(
  (
    {
      title,
      children,
      titleTextVariant = 'title',
      titleColorVariant = 'text',
      label,
      labelTextVariant = 'label',
      labelColorVariant = 'text',
      ...others
    }: TableContainerProps,
    ref: any
  ): JSX.Element => {
    const getColorName = (colorVariant: TextColorVariant): string =>
      colorVariant !== 'text' ? `${colorVariant}InteractiveColor` : colorVariant

    const titleColorName = getColorName(titleColorVariant)
    const titleColor = colors[titleColorName]

    const labelColorName = getColorName(labelColorVariant)
    const labelColor = colors[labelColorName]

    return (
      <Box ref={ref} {...getTableContainerAccessibilityProps()} {...others}>
        <HorizontalLayer className={'items-container mb-4 justify-between'}>
          <Text variant={titleTextVariant} color={titleColor} flex={1}>
            {title}
          </Text>
          <Text variant={labelTextVariant} color={labelColor}>
            {label}
          </Text>
        </HorizontalLayer>
        {children}
      </Box>
    )
  }
)

TableContainer.displayName = 'TableContainer'

export { TableContainer }
