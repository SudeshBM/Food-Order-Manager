import React from 'react';
import './About.css'; // Assuming you create a CSS file for additional styles

export default function About() {
  return (
    <div className='container-fluid p-5'>
      <h1 className='text-center mb-4'>About This Project</h1>
      <p className='lead text-center'>
        This project is a CRUD (Create, Read, Update, Delete) application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).
        It is designed to help users manage product information seamlessly.
      </p>
      
      <h3 className='mt-4'>Order Management System Features</h3>
      <ul className='list-group mb-4'>
        <li className='list-group-item'>🔹 <strong>Add New Orders:</strong> Create new order entries by providing relevant details such as order name, price, barcode number information.</li>
        <li className='list-group-item'>🔹 <strong>Update Orders Information:</strong> Edit and update existing order details in real time.</li>
        <li className='list-group-item'>🔹 <strong>Delete Orders:</strong> Remove products that are no longer needed.</li>
        <li className='list-group-item'>🔹 <strong>Retrieve Order Data:</strong> View a list of all orders stored in the database.</li>
      </ul>

      <h3 className='mt-4'>Tech Stack</h3>
      <ul className='list-group mb-4'>
        <li className='list-group-item'>🔹 <strong>MongoDB:</strong> A NoSQL database for storing order data.</li>
        <li className='list-group-item'>🔹 <strong>Express.js:</strong> A lightweight backend framework for server-side logic.</li>
        <li className='list-group-item'>🔹 <strong>React.js:</strong> A modern frontend library for building user-friendly interfaces.</li>
        <li className='list-group-item'>🔹 <strong>Node.js:</strong> A JavaScript runtime for building the backend server.</li>
      </ul>

      <h3 className='mt-4'>Key Highlights</h3>
      <ul className='list-group mb-4'>
        <li className='list-group-item'>🔹 <strong>RESTful APIs:</strong> Effectively handles CRUD operations.</li>
        <li className='list-group-item'>🔹 <strong>Responsive UI:</strong> Seamless experience across devices.</li>
        <li className='list-group-item'>🔹 <strong>Scalable Design:</strong> Easy to add new features or expand functionalities.</li>
        <li className='list-group-item'>🔹 <strong>Real-Time Updates:</strong> Instant reflection of changes in the frontend.</li>
      </ul>

      <h3 className='mt-4'>How It Works</h3>
      <p>
        <strong>Frontend (React.js):</strong> Communicates with the backend API to send and receive data, providing an interactive UI for managing orders.
      </p>
      <p>
        <strong>Backend (Node.js & Express.js):</strong> Processes requests, performs validations, and interacts with the database for CRUD operations.
      </p>
      <p>
        <strong>Database (MongoDB):</strong> Stores all order data in a flexible, document-oriented structure.
      </p>

      <h3 className='mt-4'>Use Case</h3>
      <p>
        This project serves as a foundation for managing inventory, orders, or any system requiring CRUD operations. It is suitable for learning and practical purposes, such as small-scale e-commerce platforms, inventory tracking systems, or product catalog management.
      </p>

      <h3 className='mt-4'>Future Enhancements</h3>
      <ul className='list-group mb-4'>
        <li className='list-group-item'>🔹 Implement user authentication for secure access.</li>
        <li className='list-group-item'>🔹 Add search and filtering options for easy navigation.</li>
        <li className='list-group-item'>🔹 Integrate pagination for large datasets.</li>
        <li className='list-group-item'>🔹 Extend functionality to manage orders, customers, and reports.</li>
      </ul>

      <p className='text-center'>
        This Order Management System is a great starting point for understanding the MERN stack and building scalable web applications. It combines best practices in frontend and backend development with a clean, modular structure.
      </p>
    </div>
  );
} 