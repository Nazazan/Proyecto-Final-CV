
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://randomuser.me/api/portraits/women/82.jpg") {
    myImage.setAttribute("src", "https://img.freepik.com/premium-photo/young-businesswoman-sitting-desk-working-laptop-modern-open-plan-office_625516-2041.jpg?w=2000");
  } else {
    myImage.setAttribute("src", "https://randomuser.me/api/portraits/women/82.jpg");
  }
};
