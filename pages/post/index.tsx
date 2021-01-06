
export default function Post() {
  if (Date.now()) {
    throw new Error("wwe");
  }
  return <h1 style={{color:"#F90D0D"}}>Post</h1>
}