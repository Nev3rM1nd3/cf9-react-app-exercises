import TempConverter from "./component/TempConverter.tsx";
import Layout from "./component/Layout.tsx";


function App() {

  return (
    <>
      <Layout addClasses="bg-gray-100">
        <TempConverter />
      </Layout>
    </>
  )
}

export default App
