import { useRouteError, Link } from "react-router-dom"

useRouteError

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl"></h1>
          <p className="mt-6 text-lg leading-7">Sorry, we couldn't find the page you're looking for</p>
          <Link to='/' className="btn btn-secondary mt-10"> go back home </Link>
        </div>
      </main>
    )
  }



  return <main className="grid min-h-[100vh] place-items-center px-8">
    <h4 className="text-center font-bold text-4xl">Something went wrong</h4>
  </main>
}
export default Error