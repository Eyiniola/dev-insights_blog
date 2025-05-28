
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import withLogger from './components/withLogger/withLogger';


const PostListWithLogger = withLogger(PostList);

function App() {
  return (
    <div className= "app-container">
      <Header />
      <PostListWithLogger />
      
    </div>
  )
}

export default App;
