//DOG VOTE SECTION

//happy dog
// https://cdn-icons-png.flaticon.com/512/5569/5569626.png

//sad cat
// https://cdn-icons-png.flaticon.com/512/12/12430.png

const dogSynonyms = ["canine", "doggo", "puppericino", "pooch", "pup", "tail-wagger", "good ol' boi"];

const background = document.querySelector("._31N0dvxfpsO6Ur5AKx4O5d");
console.log(document);
background.style.backgroundImage =
  "url(https://thumbs.dreamstime.com/b/dog-paw-seamless-pattern-vector-cat-puppy-footprint-wallpaper-background-tile-125665632.jpg)";

window.addEventListener("load", function (e) {
  const allUpvotes = document.querySelectorAll("._2k73nZrjAYiwAj9hv7K-kq");
  allUpvotes.forEach((ele) => {
    ele.style.backgroundImage =
      "url(https://cdn-icons-png.flaticon.com/512/5569/5569626.png)";
  });

  const allDownvotes = document.querySelectorAll(".ceU_3ot04pOVIcrrXH9fY ");
  allDownvotes.forEach((ele) => {
    ele.style.backgroundImage =
      "url(https://cdn-icons-png.flaticon.com/512/12/12430.png)";
  });

  const allText = document.querySelectorAll("._eYtD2XCVieq6emjKBH3m, ._1qeIAgB0cPwnLhDF9XSiJM");
  allText.forEach(el => {
    el.innerHTML = el.innerHTML.replace("dog", dogSynonyms[Math.floor(Math.random() * dogSynonyms.length)]);
  })

});

document.addEventListener(`scroll`, function (e) {
  console.log("scrolled");
  const allUpvotes = document.querySelectorAll("._2k73nZrjAYiwAj9hv7K-kq");
  allUpvotes.forEach((ele) => {
    ele.style.backgroundImage =
      "url(https://cdn-icons-png.flaticon.com/512/5569/5569626.png)";
  });

  const allDownvotes = document.querySelectorAll(".ceU_3ot04pOVIcrrXH9fY ");
  allDownvotes.forEach((ele) => {
    ele.style.backgroundImage =
      "url(https://cdn-icons-png.flaticon.com/512/12/12430.png)";
  });

  const allText = document.querySelectorAll("._eYtD2XCVieq6emjKBH3m, ._1qeIAgB0cPwnLhDF9XSiJM");
  allText.forEach(el => {
    el.innerHTML = el.innerHTML.replace("dog", `<span style="color: yellow; text-shadow: 0px 0px 2px blue; font-family:GoodBoy;">${dogSynonyms[Math.floor(Math.random() * dogSynonyms.length)]}</span>`);
    // el.className = "goodBoy";
  })
});

//PAWPRINT BACKGROUND SECTION

//
