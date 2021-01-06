import {ErrorProps} from 'next/error'
import {NextPageContext} from 'next'
function Error({ statusCode }:ErrorProps) {
  return (
    <p style={{color:"#F90D0D"}}>
      {statusCode
        ? `An error ${statusCode} occurred ffffffon server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }:NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error