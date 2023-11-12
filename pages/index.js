//Initial Fetch from the server. All data is fetched and then passed to the client for routing and manipulating.

import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

//User data passed into the Index component as props
const Index = (props) => (
  <Layout>
    <h4 className="m-4">User Details</h4>
    <ul className="list-group">
      {/* mapping the properties and assigning a unique itertaion id to personData */}
      {props.users.map((personData) => (
        // Creating the list of the personData by id key
        <li key={personData.id} className="list-group-item">
          {/* Setting the browser pretty url and teh router url which will take us to the new page
          This link is defined by the user.js page in the pages directroy and managed by next.js's router method.
          We have also added a query parameter to the href url and defined that as id which will take in the id of link clicked
          and pass that id to the url for extrcation by the user.js page*/}
          <Link as={`/user/${personData.id}`} href={`/user?id=${personData.id}`}>
            <a>{personData.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

//Initial fetch from the API server.
Index.getInitialProps = async function() {
  //Fetches the data from url which returns a promise which we await and then pass into the response;
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //We then await the response promise when return, with the json object and saved as a data variable
  const data = await res.json();
//testing
  console.log(`Show data fetched. Count: ${data.length}`);
  console.log("this is the actual json", data);
//Simple object define to stored the value of the json as variable users
  return {
    users: data
  };
};

export default Index;
