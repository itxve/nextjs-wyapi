
export default function Post() {
  return <h1 style={{color:"#F90D0D"}}>Post</h1>
}

Post.getInitialProps = () => {
  return {
    error: {
      statusCode: 401,
      message: 'oopsie'
    }
  };
};