// function Layout(props) {
//   const myArray = [
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//     "circle",
//     "x-shape",
//   ];
//   return (
//     <div>
//       <div className="lines">
//         <div className="line-1">
//           {myArray.map((shape, index) => (
//             <div key={index} className={shape}></div>
//           ))}
//         </div>
//         <div className="line-2">
//           {myArray.map((shape, index) => (
//             <div key={index} className={shape}></div>
//           ))}
//         </div>
//         <div className="line-3">
//           {myArray.map((shape, index) => (
//             <div key={index} className={shape}></div>
//           ))}
//         </div>
//         <div className="line-4">
//           {myArray.map((shape, index) => (
//             <div key={index} className={shape}></div>
//           ))}
//         </div>
//         {props.children}
//       </div>
//     </div>
//   );
// }

// export default Layout;

// src/components/Layout.jsx
import PropTypes from "prop-types";
const myArray = [
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
  "circle",
  "x-shape",
];
const Layout = ({ children }) => {
  return (
    <>
      <div className="lines">
        <div className="line-1">
          <div className="shapes">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
        </div>
        <div className="line-2">
          <div className="shapes">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
        </div>
        <div className="line-3">
          <div className="shapes">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
        </div>
        <div className="line-4">
          <div className="shapes">
            {myArray.map((shape, index) => (
              <div key={index} className={shape}></div>
            ))}
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
