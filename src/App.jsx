import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectsSideBar from "./component/ProjectsSideBar";

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSideBar/>
      <NoProjectSelected/>

    </main>
  );
}

export default App;
