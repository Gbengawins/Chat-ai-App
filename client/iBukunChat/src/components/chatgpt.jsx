// I am developing a chatbot with React. I am using React Hooks. can you rewrite this code ?


// import React, { useState } from "react";

// const ChatInput = ({ sendMessage, loading }) => {
//   const [value, setValue] = useState("");

//   const handleSubmit = () => {
//     if (value === "") return;
//     sendMessage({ sender: "user", message: value });
//     setValue("");
//   };
//   return (
//     <div>
//       {loading ? (
//         <img src="./loader.gif" className="w-8 m-auto" />
//       ) : (
//         <>
//           <textarea
//             onKeyDown={(e) => {
//               e.keyCode === 13 && e.shiftKey === false && handleSubmit();
//             }}
//             rows={1}
//             className="border-0 bg-transparent outline-none w-11/12"
//             value={value}
//             type="text"
//             onChange={(e) => setValue(e.target.value)}
//           />

//           <img
//             onClick={handleSubmit}
//             src="./send.png"
//            />
            
//         </>
//       )}
//     </div>
//   );
// };

// export default ChatInput;
