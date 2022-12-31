


// local data
let reviews =[
    {
      id: 1,
      name: 'Jennifer Johnson ',
      job:'Product manager',
      image: "./images/FB_IMG_1671860820082.jpg" ,
      text: 
      'I specialise in managing newly manifactured products. Bring up different marketing strategy on ways to dominate the competitive market and ascertain a greater value of the market share hence increasing its GDP .'
    },
    {
      id: 2,
      name: 'Anna James',
      job: 'UI/UX designer',
      image: "./images/image-loop-2 (2).jpg",
      text:' i am into web designing, i design quality user friendly web pages with wonderful animations of distinguised functionality. I have 5 years of experience with notable good references from previouse clients who tends to be satisfied with my work '

    },
    {
      id: 3,
      name: 'Jason Clerk',
      job : 'Digital makerter',
      image:"./images/image-loop-.jpg",
      text: 'i am into the tech field of digital market. i facilitate an easy and reliable way of getting product from source companies to the populace, who inturns increases the revenue and market share of these companies. I have 3 years of experience.'
    },
    {
      id: 4,
      name: 'Strota Atan',
      job:'Software developing, Selling of gadget',
      image:"./images/strota.jpg",
      text:"I specialise in  writing programing langues :python, java, javascript, i'm also into seling apple products. My brand name is Kv-star world"
    },
    {
      id: 5,
      name:'Andrew',
      job:'Medical Doctor',
      image:"./images/Andrew.jpg",
      text: ' A certified doctor, studied medicine in the University of Brentford ',
    },
    {
      id: 6,
      name: 'Anie',
      job: "MakeUp Artist",
      image:"./images/annie.jpg",
      text: 'Cover  weddings, birthday shots and other events, also train ppl with such passion of being a make up artist.'
    },
    {
      id: 7,
      name: 'Wakky',
      job: 'Photographer',
      image:"./images/FB_IMG_1672325921011.jpg",
      text: 'A photograher with a specified years of experience, covers events, videography and a lot more'
    },
    {
      id: 8,
      name: "Smart'jay",
      job: 'Software development',
      image:"./images/Ovu_4422.jpg",
      text: ' A proficient frontend web developer, deal with html, css, bootstrap, tailwind, javascript and  React,'
    }
]

let img = document.querySelector("#person-1-img")
let author = document.querySelector("#author")
let jb = document.querySelector("#job")
let writeUp =document.getElementById('info')

const preBtn = document.getElementById('preview-btn')
const nextBtn = document.getElementById('next-btn')
const randomBtn = document.getElementById('random-btn')

// setting start time 
let currentItem =0;

// window.addEventListener('DOMContentLoaded',()=>{
//   //  console.log('shake and bake');
//   //  let item = reviews[currentItem];
//   // //  console.log(item);
//   //  img.src= item.image
//   //  author.innerHTML=item.name
//   //  jb.innerHTML=item.job
//   //  writeUp.innerHTML=item.text;
//   showPerson(currentItem)
// })

// let showPerson= (person)=>{
//   let item = reviews[person];
//   //  console.log(item);
//    img.src= item.image
//    author.innerHTML=item.name
//    jb.innerHTML=item.job
//    writeUp.innerHTML=item.text;
// }
// next butn
// nextBtn.addEventListener('click',()=>{
//    currentItem++;
//    if (currentItem > reviews.length-1) {
//        currentItem=0
//    }
//    showPerson(currentItem)
// })
// preBtn.addEventListener('click',()=>{
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem=reviews.length-1
// }
//   showPerson(currentItem)
// })

randomBtn.addEventListener('click',()=>{
  currentItem=Math.floor(Math.random()*reviews.length)
  showPerson(currentItem)
  console.log(currentItem);
})

window.addEventListener('DOMContentLoaded',()=>{
  showFunction()
})
let showFunction =()=>{
  let item = reviews[currentItem]
  img.src=item.image
  author.innerHTML=item.name
  jb.innerHTML=item.job
  writeUp.innerHTML=item.text
}
nextBtn.addEventListener('click',()=>{
  currentItem++
  if (currentItem > reviews.length-1) {
      currentItem=0
    
  }
  showFunction()
})
preBtn.addEventListener('click',()=>{
  currentItem--
  if (currentItem< 0) {
      currentItem=reviews.length
    
  }
  showFunction()
})
