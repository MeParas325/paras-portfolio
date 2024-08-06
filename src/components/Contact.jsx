import React, {useEffect} from 'react'

const Contact = () => {

    useEffect(() => {
        emailjs.init("07fQbufodOpjae0ht"); 
      }, []);
    
      const handleSubmit = (event) => {
        event.preventDefault()
    
        // Fetch form data
        const formData = {
          name: event.target.name.value.trim(),
          email: event.target.email.value.trim(),
          message: event.target.message.value.trim(),
          phoneNo: event.target.phoneNo.value.trim(),
          subject: event.target.subject.value.trim(),
        };
    
        console.log(`Name => ${formData.name}, Email => ${formData.email}, Message => ${formData.phoneNo}, Subject => ${formData.subject}, Message => ${formData.message}`)

        if (formData.name !== "" && formData.email !== "" && formData.message !== "" && formData.phoneNo !== "" && formData.subject !== "") {
          emailjs.send("service_4vxi5lj", "template_p96il3r", formData)
            .then((response) => {
              console.log('Email sent:', response);
              Toastify({
                text: "Email sent Successfully.",
                duration: 3000,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                style: {
                  background: "#ab68cc"
                },
              }).showToast();
              event.target.reset(); // Clear the form
            }, (error) => {
              console.error('Email error:', error)
              alert('Oops! Something went wrong.')
            });
        } else {
          Toastify({
            text: "Please fill all the fields",
            duration: 3000,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
              background: "red",
            },
          }).showToast()
        }
      }

  return (
    <div id="contact-outer">

   
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <p>Collaborate with me, and together, we’ll transform your vision into a captivating reality. I firmly believe
            in the mantra:</p>
        <p>"I don't work for you, I work with you"</p>

        <form onSubmit={handleSubmit} id="contactForm">
            <div className="input-box">
                <input type="text" name="name" id="name" required="true" placeholder="Full Name" />
                <input type="email" name="email" id="email" required="true" placeholder="Email" />
            </div>
            <div className="input-box">
                <input type="number" name="phoneNo" id="phoneNo" required="true" placeholder="Phone Number" />
                <input type="text" name="subject" id="subject" required="true" placeholder="Subject" />
            </div>
            <textarea name="message" id="message" required="true" cols="30" rows="6"
                placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" className="btn" />
        </form>
    </section>
    </div>
  )
}

export default Contact