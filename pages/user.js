import BackButton from '../components/Back.js';
import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
//Data passed as prop
const User = (props) => {
  //Assigned to personData.
  const { personData } = props;
//Access object with dot notation for diaply.
  return (
    <Layout>
      <BackButton />
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">{personData.name}s</h1>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>ID:</strong> {personData.id}
            </li>
            <li className="list-group-item">
              <strong>Username:</strong> {personData.username}
            </li>
            <li className="list-group-item">
              <strong>Name:</strong> {personData.name}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {personData.email}
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> {personData.phone}
            </li>
            <li className="list-group-item">
              <strong>Website:</strong> {personData.website}
            </li>
            <li className="list-group-item">
              <strong>Company:</strong> {personData.company.name}
            </li>
            <li className="list-group-item">
              <strong>Address:</strong>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Street:</strong> {personData.address.street}
                </li>
                <li className="list-group-item">
                  <strong>Suite:</strong> {personData.address.suite}
                </li>
                <li className="list-group-item">
                  <strong>City:</strong> {personData.address.city}
                </li>
                <li className="list-group-item">
                  <strong>Zipcode:</strong> {personData.address.zipcode}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

//Again the async function gets the data from the server but this time matches it to the query parameter id 
// as passed in the URL by making use of te next.js context tool by extract the "id" from the query with context.query
//The context object, when the pageis loaded carries http info such as the headers, cookies and url. 
User.getInitialProps = async function (context) {
  const { id } = context.query // Extract the 'id' query parameter from the URL
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //Json when returned saved to data.
  const data = await res.json()
  console.log(`Fetched data`, data)

  return { personData: data } // Return the fetched data as 'personData' prop
}

export default User;
