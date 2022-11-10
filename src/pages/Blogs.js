import React from "react";
import useTitle from "../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <section className="  text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-bold text-lg mb-4">
              Difference between SQL and NoSQL
            </h3>
            <ul className="mt-1 text-gray-600 text-justify ">
              <li>
                SQL databases are relational, NoSQL databases are
                non-relational.
              </li>
              <br />
              <li>
                SQL databases use structured query language and have a
                predefined schema. NoSQL databases have dynamic schemas for
                unstructured data.
              </li>
              <br />
              <li>
                SQL databases are vertically scalable, while NoSQL databases are
                horizontally scalable.
              </li>
              <br />
              <li>
                SQL databases are table-based, while NoSQL databases are
                document, key-value, graph, or wide-column stores.
              </li>
              <br />
              <li>
                SQL databases are better for multi-row transactions, while NoSQL
                is better for unstructured data like documents or JSON.
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-bold text-lg mb-4">
              What is JWT, and how does it work?
            </h3>
            <p className="mt-1 text-gray-600 text-justify">
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). <br /> <br />
              it works by : <br /> <br />
              User sign-in using username and password or google/facebook.
              <br /> <br />
              Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
              <br /> <br />
              User's Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header.
              <br /> <br />
              Resource server then verifies the authenticity of the token using
              the secret salt/ public key.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-bold text-lg mb-4">
              What is the difference between javascript and NodeJS?
            </h3>
            <p className="mt-1 text-gray-600 text-justify">
              JavaScript is a proper high-level programming language used to
              create web scripts whereas Node.js is a run time environment built
              on google's v8 engine.
              <br />
              <br />
              JavaScript is executed in the browser whereas using Node.js gives
              us the ability to execute JavaScript outside the browser.
              <br />
              <br />
              JavaScript can manipulate DOM or add HTML within whereas Node.js
              doesn't have the capability to add HTML.
              <br />
              <br />
              JavaScript is mainly used to create front end web applications or
              develop client-side whereas Node.js is used on the back end
              development that is server-side development
              <br />
              <br />
              JavaScript follows the standard of JavaScript when writing
              programs whereas Node.js is written in C++ while using the v8
              engine, it runs JavaScript outside the browser.
            </p>
          </div>
          <div className="bg-gray-200 p-8 rounded-md">
            <h3 className="font-bold text-lg mb-4">
              How does NodeJS handle multiple requests at the same time?
            </h3>
            <p className="mt-1 text-gray-600 text-justify">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue.
              <br />
              <br />
              If NodeJS can process the request without I/O blocking then the
              event loop would itself process the request and sends the response
              back to the client by itself. But, it is possible to process
              multiple requests parallelly using the NodeJS cluster module or
              worker_threads module.
              <br />
              <br />A single instance of Node.js runs in a single thread. If you
              have a multi-core system then you can utilize every core.
              Sometimes developer wants to launch a cluster of NodeJS process to
              take advantage of the multi-core system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
