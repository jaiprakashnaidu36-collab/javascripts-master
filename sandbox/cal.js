// const obj = {
//     name : "jai prakash",
//     weigth : 90 + "kgs" ,
// }

// // for (const [key,val] in obj) {
// //     console.log(obj[val])
// // }

// for (const key in obj) {
//        console.log(obj[key]);
// }

async function fetchUser(){
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {username: "jai"}
}

async function fetchUserPosts(){
    await new Promise((resolve) => setTimeout(resolve, 300));
    return [
    { id: 1, title: "Hello World", author: username },
    { id: 2, title: "Async/Await in JS", author: username },
  ];
}

async function loadUserData(userId) {
  try {
    const user = await fetchUser(userId);
    console.log("User:", user);

    const posts = await fetchUserPosts(user.username);
    console.log("Posts:", posts);

    return posts;
  } catch (error) {
    console.error("Error loading user data:", error);
  } finally {
    console.log("Done loading.");
  }
}

loadUserData(101);