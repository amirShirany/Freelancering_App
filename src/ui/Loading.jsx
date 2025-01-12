import ClipLoader from "react-spinners/ClipLoader"

function Loading() {
  return (
    <div className="flex justify-center">
      <ClipLoader
        color="#000000"
        loading={true}
        size={30}
        data-testid="loader"
      />
    </div>
  )
}

export default Loading
