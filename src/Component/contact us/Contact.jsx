import React from 'react'

export default function contact() {
  return (
    <>
    <div className="about-contianer">
      <div className="about-block">
        <div className="about-info">
          <p id='title'>
          📞 Contact Me
          </p>
          <p>
          Have a question, collaboration idea, br or just want to say hello? I’d love to hear from you! <br /> Whether you're interested in coding, content creation, <br /> or web development, feel free to reach out. 👋</p>
        </div>
        <div className="about-info">
          <form action="">
            <input type="text" placeholder='Enter your name' required/><br /> 
            <input type="email" placeholder='Email' required/><br /> 
            <textarea name="" id="" placeholder='Message' required></textarea><br />
            <button>send </button>
          </form>
        </div>
      </div>
      <div className="about-block">
        <div className="about-info" id='about-me'>
          <p id='title'>📬 Get in Touch</p>
          <p>
📧 Email: siddeshparte04@gmail.com <br />

📱 Instagram: codeartist_04 <br />

🎥 YouTube: [Your Channel Name or Link] <br />

💼 LinkedIn: [LinkedIn Profile Link] (optional)</p>
        </div>
      </div>
    </div>
    </>
  )
}
