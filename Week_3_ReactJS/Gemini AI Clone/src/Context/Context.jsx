// import { createContext, useState } from "react";
// // import runChat from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {

//     const [input , setInput] = useState("");
//     const [recentPrompt , setRecentPrompt] = useState("");
//     const [prevPrompt , setPrevPrompt] = useState([]);
//     const [showResult , setShowResult] = useState(false);
//     const [loading , setLoading] = useState(false);
//     const [resultData , setResultData] = useState("");

//     const onSent = async (prompt) => {
//         await runChat(prompt)
//     }

//     const contextValue = {
        
//     }

//     return (
//         <ContextProvider value={contextValue}>
//             {props.children}
//         </ContextProvider>
//     )

// }

// export default ContextProvider