import { proxy } from "valtio";
import { url } from "./../config";
import { axios } from "axios";

export let state = proxy({
  login: true,
  words: [
    {
      word: "",
      wordlang: "",
      wordDefn: "",
    },
  ],
});

// const postExample = async () => {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ type: "Ambulance", status: "Pending", code: code }),
//   };
// };

// await fetch("http://127.0.0.1:5000/api/dictionary/search", requestOptions).then(
//   (response) => {
//     response.json().then((data) => {
//       console.log("Post created at : ", data);
//       Alert.alert("Notice", "Request Sent", [
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel",
//         },
//         { text: "OK", onPress: () => console.log("OK Pressed") },
//       ]);
//     });
//   }
// );

// console.log(url);
