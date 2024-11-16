// import 'font-awesome/css/font-awesome.min.css';
// import React, { useRef, useState } from "react";
// import Tree from "react-d3-tree";
// import MlmTreeData from './MlmTreeData'; // Import MlmTreeData from the separate file
// import './userNetworkTree.css'; // Import the CSS file

// const UserNetworkTree = () => {
//   const containerRef = useRef(null);
//   const [nodesVisibility, setNodesVisibility] = useState({}); // State to track visibility of nodes

//   // Function to toggle visibility of the nodes
//   const toggleNodeVisibility = (nodeId) => {
//     setNodesVisibility((prevVisibility) => ({
//       ...prevVisibility,
//       [nodeId]: !prevVisibility[nodeId],
//     }));
//   };

//   // Recursive function to modify tree data based on visibility state
//   const modifyTreeData = (node) => {
//     const isVisible = nodesVisibility[node.id] !== false;
//     if (node.children && isVisible) {
//       return {
//         ...node,
//         children: node.children.map(modifyTreeData),
//       };
//     } else {
//       return { ...node, children: [] };
//     }
//   };

//   const modifiedTreeData = MlmTreeData.map(modifyTreeData);

//   return (
//     <div ref={containerRef} className="tree-container-wrapper">
//       <div className="tree-container">
//         <Tree
//           data={modifiedTreeData} 
//           renderCustomNodeElement={(rd3tProps) => {
//             const { nodeDatum } = rd3tProps;

//             // Assign custom color based on node level
//             let nodeColor = "#D9534F"; // Default color for root node
//             if (nodeDatum.id === '1') nodeColor = "#D9534F"; // Root
//             else if (['2', '3'].includes(nodeDatum.id)) nodeColor = "#F0AD4E"; // First level
//             else nodeColor = "#5BC0DE"; // Second level

//             // Node click event to toggle visibility
//             const handleNodeClick = () => {
//               toggleNodeVisibility(nodeDatum.id);
//             };

//             return (
//               <g onClick={handleNodeClick} style={{ cursor: 'pointer' }}>
             
//                 {/* Using FontAwesome person icon */}
//                 <foreignObject width="120" height="120" x="-60" y="-10">
//                   <i className="fa fa-user" style={{ fontSize: '60px', color: nodeColor }} />
//                 </foreignObject>

//                 {/* User details displayed to the right of the icon */}
//                 <g transform="translate(30, 30)">
//                   <text className="node-text" x="0" y="0">
//                     {nodeDatum.name}
//                   </text>
               
                 
//                 </g>
//               </g>
//             );
//           }}
//           orientation="vertical"
//           translate={{ x: 200, y: 100 }}
//           pathFunc="step"
//           zoomable={false} // Disable zoom controls
//           scaleExtent={{ min: 1, max: 1 }} // Lock zoom level to a fixed scale
//           collapsible={false}
//         />
//       </div>
//     </div>
//   );
// };

// export default UserNetworkTree;

// UserNetworkTree.jsx
// import 'font-awesome/css/font-awesome.min.css';
// import React, { useRef, useState, useEffect } from 'react';
// import Tree from 'react-d3-tree';
// import axios from 'axios';
// import './userNetworkTree.css';
 
// const UserNetworkTree = () => {
//   const containerRef = useRef(null);
//   const [nodesVisibility, setNodesVisibility] = useState({}); // Track node visibility
//   const [mlmTreeData, setMlmTreeData] = useState(null); // Store fetched MLM data
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
 
//   // Fetch user ID from local storage
//   //const userId = localStorage.getItem('user_id');
//   const userId=1
 
//   // Fetch MLM tree data from the backend
//   useEffect(() => {
//     const fetchMlmData = async () => {
//       if (!userId) {
//         setError('User ID not found in local storage.');
//         setLoading(false);
//         return;
//       }
 
//       try {
//         const response = await axios.get(`http://127.0.0.1:5000/api/mlm-tree?user_id=${userId}`);
//         setMlmTreeData(response.data); // Directly assign the fetched data
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching MLM Tree:', err);
//         setError('Failed to load data.');
//         setLoading(false);
//       }
//     };
 
//     fetchMlmData();
//   }, [userId]);
 
//   // Toggle node visibility
//   const toggleNodeVisibility = (nodeId) => {
//     setNodesVisibility((prevVisibility) => ({
//       ...prevVisibility,
//       [nodeId]: !prevVisibility[nodeId],
//     }));
//   };
 
//   // Modify tree data based on visibility state
//   const modifyTreeData = (node) => {
//     const isVisible = nodesVisibility[node.id] !== false;
//     if (node.children && isVisible) {
//       return {
//         ...node,
//         children: node.children.map(modifyTreeData),
//       };
//     } else {
//       return { ...node, children: [] };
//     }
//   };
 
//   const modifiedTreeData = mlmTreeData ? modifyTreeData(mlmTreeData) : null;
 
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;
 
//   return (
//     <div ref={containerRef} className="tree-container-wrapper">
//       <div className="tree-container">
//         <Tree
//           data={modifiedTreeData}
//           renderCustomNodeElement={({ nodeDatum }) => {
//             let nodeColor = nodeDatum.id === '1' ? '#D9534F' : nodeDatum.children?.length ? '#F0AD4E' : '#5BC0DE';
           
//             return (
//               <g onClick={() => toggleNodeVisibility(nodeDatum.id)} style={{ cursor: 'pointer' }}>
//                 <foreignObject width="100" height="100" x="-50" y="-10">
//                   <i className="fa fa-user" style={{ fontSize: '50px', color: nodeColor }} />
//                 </foreignObject>
//                 <text x="20" y="40" className="node-text">
//                   {nodeDatum.name}
//                 </text>
//               </g>
//             );
//           }}
//           orientation="vertical"
//           translate={{ x: 200, y: 100 }}
//           pathFunc="step"
//           zoomable={true}
//           collapsible={true}
//         />
//       </div>
//     </div>
//   );
// };
 
// export default UserNetworkTree;
import 'font-awesome/css/font-awesome.min.css';
import React, { useRef, useState, useEffect } from 'react';
import Tree from 'react-d3-tree';
import './userNetworkTree.css';

const UserNetworkTree = () => {
  const containerRef = useRef(null);
  const [nodesVisibility, setNodesVisibility] = useState({}); // Track node visibility
  const [mlmTreeData, setMlmTreeData] = useState(null); // Store fetched MLM data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch user ID from local storage
  const userId = localStorage.getItem('user_id');
  //const userId = 1;

  // Fetch MLM tree data from the backend using fetch
  useEffect(() => {
    const fetchMlmData = async () => {
      if (!userId) {
        setError('User ID not found.');
        setLoading(false);
        return;
      }
    
      try {
        const response = await fetch(`http://127.0.0.1:5000/mlm-tree?user_id=${userId}`);
        console.log('Response Status:', response.status);
    
        if (!response.ok) {
          // Handle error if response is not ok (including 404)
          const errorData = await response.json(); // Get the error message from the response
          throw new Error(errorData.message || 'Error fetching data');
        }
    
        const data = await response.json(); // Parse the JSON response
        setMlmTreeData(data); // Set the MLM tree data in state
        setLoading(false);
    
      } catch (err) {
        console.error('Error fetching MLM Tree:', err);
    
        // Display the error message if no hierarchy data found (404)
        setError(err.message || 'An unexpected error occurred.');
        setLoading(false); // Stop loading in case of error
      }
    };
    
    


    fetchMlmData();
  }, [userId]);

  // Toggle node visibility
  const toggleNodeVisibility = (nodeId) => {
    setNodesVisibility((prevVisibility) => ({
      ...prevVisibility,
      [nodeId]: !prevVisibility[nodeId],
    }));
  };

  // Modify tree data based on visibility state
  const modifyTreeData = (node) => {
    const isVisible = nodesVisibility[node.id] !== false;
    if (node.children && isVisible) {
      return {
        ...node,
        children: node.children.map(modifyTreeData),
      };
    } else {
      return { ...node, children: [] };
    }
  };

  const modifiedTreeData = mlmTreeData ? modifyTreeData(mlmTreeData) : null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div ref={containerRef} className="tree-container-wrapper">
      <div className="tree-container">
        <Tree
          data={modifiedTreeData}
          renderCustomNodeElement={({ nodeDatum }) => {
            let nodeColor = nodeDatum.id === '1' ? '#D9534F' : nodeDatum.children?.length ? '#F0AD4E' : '#5BC0DE';
            return (
              <g onClick={() => toggleNodeVisibility(nodeDatum.id)} style={{ cursor: 'pointer' }}>
                <foreignObject width="100" height="100" x="-50" y="-10">
                  <i className="fa fa-user" style={{ fontSize: '50px', color: nodeColor }} />
                </foreignObject>
                <text x="20" y="40" className="node-text">
                  {nodeDatum.name}
                </text>
              </g>
            );
          }}
          orientation="vertical"
          translate={{ x: 200, y: 100 }}
          pathFunc="step"
          zoomable={true}
          collapsible={true}
        />
      </div>
    </div>
  );
};

export default UserNetworkTree;
