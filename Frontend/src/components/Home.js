import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styles

export default function Home() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Insertproduct'); // Redirect to the orders page
  };

  const menuItems = [
    { id: 1, name: 'Burger', price: 200, image: 'https://www.shutterstock.com/image-photo/grilled-gourmet-burger-cheese-tomato-600nw-2467669143.jpg' },
    { id: 2, name: 'Pizza', price: 399, image: 'https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg' },
    { id: 3, name: 'Pasta', price: 275, image: 'https://theplantbasedschool.com/wp-content/uploads/2024/01/Penne-Arrabbiata-25.jpg' },
    { id: 4, name: 'Coke', price: 75, image: 'https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202402_2184_MediumCokeZero_ContourGlass_1564x1564:nutrition-calculator-tile?wid=1564&hei=1564&dpr=off' },
    { id: 5, name: 'Chicken Wings', price: 250, image: 'https://t3.ftcdn.net/jpg/02/91/35/16/360_F_291351654_FFAS60r2iHUkOY69RPRwEOVS76EU4SdA.jpg' },
    { id: 6, name: 'Burritos', price: 230, image: 'https://images.ctfassets.net/uexfe9h31g3m/2A05G9UG5CAKYcyaU8U8uQ/23864782f34c388e5380ef6412c2c8f2/burrito-mince-black-beans.jpg?w=2000&h=1500&fm=webp&fit=thumb&q=100' },
    { id: 7, name: 'Ice Cream', price: 120, image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/5db28ee7aed5c06a08111207a24c6a2c' },
    { id: 8, name: 'Spiral Fried Potato', price: 180, image: 'https://thumbs.dreamstime.com/b/potatoes-cut-spiral-fried-tornado-potato-potatoes-cut-spiral-fried-tornado-potato-street-food-close-up-photo-248220051.jpg' },
    { id: 9, name: 'Blue Lagoon Soda', price: 60, image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359337738/YE/ET/BU/87963143/blue-lagoon-500x500.jpg'},
    { id: 10, name: 'Chicken Nuggets', price: 250, image: 'https://img.freepik.com/premium-photo/gourmet-chicken-nuggets-with-bbq-sauce-chicken-nugget-fried-food-image-photography_1020697-131153.jpg' },
    { id: 11, name: 'Fries', price: 99, image: 'https://img.freepik.com/premium-photo/portion-french-fries_908985-48851.jpg' },
    { id: 12, name: 'Orange Soda', price: 60, image: 'https://thumbs.dreamstime.com/b/vibrant-refreshing-glass-fizzy-orange-soda-drink-beautifully-garnished-fresh-orange-slice-ice-isolated-333001879.jpg' },
    { id: 13, name: 'Chicken Shawarma', price: 220, image: 'https://thumbs.dreamstime.com/b/delicious-chicken-shawarma-wrap s-lying-wooden-board-chicken-shawarma-wraps-lying-wooden-board-sauces-background-324128678.jpg' },
    { id: 14, name: 'Onion Rings', price: 110, image: 'https://media.istockphoto.com/id/865789218/photo/onion-rings-with-ketchup.jpg?s=612x612&w=0&k=20&c=XxCAWLfOicCFWfZz0tRv1qoDMZM7UdQlfLaMJT6GoS8=' },
    { id: 15, name: 'Sandwich', price: 140, image: 'https://media.istockphoto.com/id/1127940785/photo/stacked-vegetarian-sandwiches-of-arugula-artichoke-sun-dried-tomato-pesto.jpg?s=612x612&w=0&k=20&c=m0NkVUEbI_Q4sBcVc270-DWzaZ-lSKottYyqS-smqIA=' },
  ];
  
  return (
    <div className='container-fluid p-5' style={{ backgroundColor: '#f8f4e3' }}>
      <h2 
        onClick={handleRedirect} 
        style={{ cursor: 'pointer', color: '#b22222', fontFamily: 'Georgia, serif' }} 
      >
        {/* Go to Orders Section. */}
      </h2>
      <h3 className='mt-4' style={{ color: '#8b4513', fontFamily: 'Georgia, serif' }}>Food and Beverages Menu</h3>


      <div className='row'>
        {menuItems.map(item => (
          <div className='col-md-4 mb-3' key={item.id}>
            <div className='card' style={{ border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transition: '0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                <img src={item.image} alt={item.name} className='card-img-top' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className='card-body' style={{ backgroundColor: '#fff8dc' }}>
                <h5 className='card-title' style={{ color: '#b22222' }}>{item.name}</h5>
                <p className='card-text'>Price: ₹{item.price.toFixed(2)}</p>
                <button 
                  className='btn btn-danger' 
                  onClick={handleRedirect}
                  style={{ backgroundColor: '#b22222', borderColor: '#b22222' }}
                >
                  Add Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// import React from 'react'

// export default function Home() {
//   return (
//     <div className='container-fluid p-5'>
//         <h2>Go to Products Section.</h2>
//     </div>
//   )
// }
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Home() {
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate('/products'); // Redirect to the products page
//   };

//   return (
//     <div className='container-fluid p-5'>
//       <h2 
//         onClick={handleRedirect} // Call handleRedirect on click
//         style={{ cursor: 'pointer', color: 'black' }} // Change cursor and color for better UX
//       >
//         Go to Orders Section.
//       </h2>
//     </div>
//   );
// }
