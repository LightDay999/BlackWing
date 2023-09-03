import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'

const BookboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]} description='bookboard page...'>
        BookBoard
      </PageTitle>
    </>
  )
}

const BookboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <BookboardPage />
    </>
  )
}

export {BookboardWrapper}
