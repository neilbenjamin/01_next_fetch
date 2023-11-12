import Header from './Header';
import Head from 'next/head'; // Import the Head component from Next.js

const Layout = (props) => (
  <div>
    <Head>
      {/* Include the Bootstrap stylesheet here */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
    </Head>
    <Header />
    <div>
      {props.children}
    </div>
  </div>
);

export default Layout;
