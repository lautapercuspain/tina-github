import React from 'react'
import styled from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { Overlay } from '../ui'
import { DocumentationNavigation } from 'components/DocumentationNavigation'
import { Footer } from './Footer'
import { DocsTextWrapper } from './DocsTextWrapper'
import { FeedbackForm } from 'components/forms'

interface DocsLayoutProps {
  navItems: any
  guide?: false | { category: string }
  children: any
}

export const DocsLayout = React.memo(
  ({ children, navItems, guide = false }: DocsLayoutProps) => {
    const router = useRouter()
    return (
      <>
        <DefaultSeo
          openGraph={{
            url: 'https://tinacms.org' + router.asPath,
          }}
        />
        <DocsLayoutDiv>
          <DocumentationNavigation navItems={navItems} guide={guide} />
          <DocsTextWrapper>{children}</DocsTextWrapper>
          <FeedbackForm />
          <Footer light />
        </DocsLayoutDiv>
      </>
    )
  }
)

const DocsLayoutDiv = styled.div`
  @media (min-width: 1200px) {
    position: relative;
    padding: 0 0 0 16rem;

    ${Overlay} {
      display: none;
    }
  }
`
