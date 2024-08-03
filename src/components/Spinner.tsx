import { DotLoader } from "react-spinners"

const override = {
  display: "block",
  margin: "100px auto",
}
const Spinner = ({ loading }: {loading: boolean}) => {

  return (
    <DotLoader
      color="#4338ac"
      loading={loading}
      cssOverride={override}
      size={120}
    />
  )
}

export default Spinner