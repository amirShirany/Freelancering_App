import ClipLoader from "react-spinners/ClipLoader"

function Loading() {
  return (
    <div className="flex justify-center">
      <ClipLoader
        color="rgb(var(--color-primary-900))"
        loading={true}
        size={30}
        data-testid="loading"
      />
    </div>
  )
}

export default Loading
