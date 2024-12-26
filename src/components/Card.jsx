import React from "react"
import CardTemplate from "../templates/CardTemplate"

const dataQuotes = [
  {
    newText:"Skilled in HTML5 for building structured and semantic web pages.",
    bgImage:"assets/Images/HTML5.png",
  },

  {
    newText:"Experienced in CSS for styling and responsive web design.",
    bgImage:"assets/Images/CSS.png",
  },

  {
    newText:"Proficient in JavaScript for dynamic and interactive web functionalities.",
    bgImage:"assets/Images/JavaScript.png",
  },
  {
    newText:"Adept at using Figma for UI/UX design and prototyping.",
    bgImage:"assets/Images/figma.png",
  },

  {
    newText:"Proficient in Tailwind CSS for rapid and customizable styling.",
    bgImage:"assets/Images/tailwind.png",
  },

];

const Card = () => {
  return (
    <div className="flex justify-around mt-10">
      {dataQuotes.map((quote,index) => (
        <CardTemplate 
        text={quote.text} 
        newText={quote.newText}
        bgImage={quote.bgImage}
        key={index}
        />
      ))}
        
    </div>
  )
}

export default Card


